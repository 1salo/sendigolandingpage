"use client";

import Image from "next/image";
import Countdown from "./components/countdown";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-center p-4 text-black">
      <div className="w-full max-w-3xl px-4">
        <Image
          src="/Sendigologo.svg"
          alt="Sendigo Logo"
          width={500}
          height={500}
          className="mx-auto block -mb-16 -mt-6 max-w-full h-auto"
          priority
        />

        <h1 className="text-xl sm:text-2xl font-bold">
          Något stort är på gång
        </h1>
        <p className="text-3xl sm:text-5xl mt-2 text-black">
          Vart vill du skicka?
        </p>
        <Countdown />
        <p className="mt-4 text-xs sm:text-sm text-gray-600">
          Följ oss på{" "}
          <a
            href="https://www.instagram.com/sendigo_sverige/"
            className="underline hover:text-blue-500"
          >
            Instagram
          </a>
        </p>
        <p className="mt-10">VI SES SNART // Johan & William Salomonsson</p>
      </div>
    </main>
  );
}
