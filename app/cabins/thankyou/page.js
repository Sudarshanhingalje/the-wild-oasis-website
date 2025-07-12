"use client";

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
    <div className="relative screen flex flex-col justify-center items-center text-center space-y-6 bg-background px-4">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={400}
          recycle={false}
          origin={{ x: 0.5, y: 0.5 }}
        />
      )}

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
  );
}
