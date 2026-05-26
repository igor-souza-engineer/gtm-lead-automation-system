export default function AccessPassCard() {
  return (
    <div className="relative h-[26rem] w-[20rem] sm:h-[29rem] sm:w-[22rem] xl:h-[32rem] xl:w-[22.5rem]">
      <style>
        {`
          @keyframes passFloat {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-12px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

      <div
        className="relative h-full w-full"
        style={{
          animation: "passFloat 6s ease-in-out infinite",
        }}
      >
        <img
          src="/images/pass-front-clean.png"
          alt="CryptoHub Pro Access Pass"
          className="h-full w-full object-contain drop-shadow-[0_0_60px_rgba(214,194,154,0.24)]"
          draggable={false}
        />
      </div>
    </div>
  );
}