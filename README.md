# GTM Lead Automation System

Production-style GTM automation system for lead capture, qualification, routing, enrichment, and transactional communication.

## Overview

This project simulates a real B2B GTM workflow, connecting a lead acquisition interface to an automation layer responsible for validating, enriching, qualifying, routing, and processing inbound leads.

The goal is to demonstrate how frontend development, APIs, webhooks, automation, LLM-assisted workflows, and production infrastructure can work together in a practical GTM system.

## Architecture

Next.js | Webhook | n8n | Validation | Enrichment | Qualification | LLM Classification | Routing | CRM / Storage | Resend

## Features

- Lead capture through a Next.js form
- Webhook-based workflow orchestration with n8n
- Lead validation and normalization
- ICP-based qualification and lead scoring
- Lead routing based on business rules
- LLM-assisted classification and summarization
- CRM / storage synchronization
- Transactional email through Resend
- Error handling and retry strategies
- Duplicate detection and basic idempotency
- Docker-based local environment
- Cloud deployment
- CI/CD validation through GitHub Actions

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- n8n
- REST APIs
- Webhooks
- JSON
- Resend
- LLMs
- Prompt Engineering
- Docker
- Docker Compose
- GitHub Actions
- Cloud deployment

## How It Works

1. A user submits the lead form through the Next.js frontend.
2. The frontend sends the lead payload to an n8n webhook.
3. n8n validates and normalizes the submitted data.
4. Lead information is enriched and prepared for qualification.
5. Qualification rules calculate a lead score based on ICP criteria.
6. An LLM classifies intent and generates a concise lead summary.
7. Routing rules determine the appropriate next step.
8. Qualified leads are stored or synchronized with the configured destination.
9. Resend is used for transactional communication and internal notifications.
10. Failed operations are handled through retries, logging, and fallback paths.

## Lead Qualification

The workflow uses explicit scoring rules to evaluate lead fit.

Example:

- Fintech / Bank / PSP: +30
- Brazil / LATAM: +20
- 50+ employees: +15
- Payments-related role: +20
- Corporate email: +15

Qualification levels:

- 0–39: Low
- 40–69: Medium
- 70–100: High

## LLM Workflow

The LLM layer is used for structured classification and summarization rather than generic text generation.

Example input:

> We operate in Brazil and Mexico and need infrastructure for international settlement.

Example output:

```json
{
  "intent": "cross-border payments",
  "urgency": "high",
  "market": ["Brazil", "Mexico"],
  "summary": "LATAM fintech looking for international settlement infrastructure."
}
```

## Running Locally

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Docker
- Docker Compose

### Installation

```bash
git clone https://github.com/igor-souza-engineer/gtm-lead-automation-system.git
cd gtm-lead-automation-system
npm install
```

### Environment Variables

Create a local environment file:

```bash
cp .env.example .env
```

Configure the required values:

```env
N8N_WEBHOOK_URL=
RESEND_API_KEY=
LLM_API_KEY=
```

Do not commit real credentials to the repository.

### Start the Frontend

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Start n8n

```bash
docker compose up -d
```

Open:

```text
http://localhost:5678
```

## Usage

1. Open the application.
2. Fill out the lead form.
3. Submit the form.
4. The payload is sent to the n8n webhook.
5. The workflow validates and enriches the lead.
6. The lead is scored and classified.
7. Routing rules determine the next action.
8. The result is stored in the configured destination.
9. High-priority leads trigger transactional notifications.

## Testing

Run unit and integration tests with:

```bash
npm test
```

Run end-to-end tests with:

```bash
npm run test:e2e
```

## Deployment

The project is designed to run with:

- Frontend deployed through a modern web platform
- n8n running as a self-hosted Docker service
- Persistent storage for workflow data
- HTTPS and environment-based configuration
- Cloud infrastructure such as Oracle Cloud or AWS Lightsail

Production deployment should include:

- reverse proxy
- HTTPS
- firewall rules
- persistent volumes
- secure environment variables
- restart policies
- health monitoring

## Reliability

The workflow includes production-oriented patterns such as:

- input validation
- retry strategies
- duplicate detection
- basic idempotency
- failed execution handling
- structured logging
- API error handling

## Security

Security considerations include:

- no secrets committed to GitHub
- environment variables stored outside the repository
- `.env` excluded through `.gitignore`
- `.env.example` containing only placeholder values
- webhook endpoints protected where appropriate
- n8n administration interface not exposed unnecessarily
- API keys and credentials stored securely

## Repository Structure

```text
gtm-lead-automation-system/
├── app/
├── workflows/
│   └── lead-qualification.json
├── docs/
│   ├── architecture.png
│   ├── workflow.png
│   └── screenshots/
├── docker-compose.yml
├── .env.example
├── README.md
└── .gitignore
```

## Project Goals

This project was built to demonstrate practical experience with:

- frontend development
- API integration
- webhook-based architectures
- n8n automation
- lead qualification
- lead routing
- LLM-assisted workflows
- transactional email
- Docker
- cloud deployment
- CI/CD
- production-oriented error handling

## License

This project is intended for educational and portfolio purposes.
