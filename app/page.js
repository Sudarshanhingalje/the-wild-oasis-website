"use client";

import bg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

export default function Page() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top z-0"
        alt="Mountains and forests with two cabins"
      />

      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={400}
          recycle={false}
          origin={{ x: 0.5, y: 0.5 }}
        />
      )}

      {/* Content */}
      <div className="z-10 text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold text-green-600 drop-shadow">
          🎉 Reservation Confirmed!
        </h1>
        <p className="text-lg text-muted-foreground">
          Thank you for your reservation.
        </p>
        <Link
          href="/account/reservations"
          className="underline text-xl text-accent-500 inline-block"
        >
          Manage your reservations &rarr;
        </Link>
      </div>
    </div>
  );
}
