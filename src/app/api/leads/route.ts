import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

function normalizePhone(phone?: string) {
  if (!phone) return undefined;

  const digits = phone.replace(/\D/g, "");

  if (!digits) return undefined;

  if (digits.startsWith("55")) {
    return `+${digits}`;
  }

  return `+55${digits}`;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const phone = normalizePhone(body.phone);
    const message = body.message?.trim();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = Number(process.env.BREVO_LIST_ID);
    const templateId = Number(process.env.BREVO_TEMPLATE_ID);

    if (!apiKey || !listId || !templateId) {
      return NextResponse.json(
        { error: "Brevo environment variables are missing." },
        { status: 500 }
      );
    }

    const headers = {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    const firstName = name.split(" ")[0];

    const attributes: Record<string, string> = {
      FIRSTNAME: firstName,
      LASTNAME: name.split(" ").slice(1).join(" "),
      SMS: phone || "",
    };

    const contactResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers,
      body: JSON.stringify({
        email,
        attributes,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!contactResponse.ok) {
      const errorData = await contactResponse.json().catch(() => null);

      return NextResponse.json(
        {
          error: "Could not create or update contact in Brevo.",
          details: errorData,
        },
        { status: 500 }
      );
    }

    const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers,
      body: JSON.stringify({
        templateId,
        to: [
          {
            email,
            name,
          },
        ],
        params: {
          firstName,
          name,
          email,
          phone,
          message,
          product: "CryptoHub",
        },
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json().catch(() => null);

      return NextResponse.json(
        {
          error: "Contact saved, but email could not be sent.",
          details: errorData,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead saved and email sent successfully.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Internal error while processing lead." },
      { status: 500 }
    );
  }
}