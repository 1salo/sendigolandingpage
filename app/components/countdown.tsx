"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const targetDate = new Date("2025-03-21T00:00:00");

  // State för tid kvar
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }; // Om tiden har passerat
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)), // Dagar kvar
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24), // Timmar kvar
      minutes: Math.floor((difference / (1000 * 60)) % 60), // Minuter kvar
      seconds: Math.floor((difference / 1000) % 60), // Sekunder kvar
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Rensa intervallet när komponenten unmountas
  }, []);

  return (
    <div className="text-center mt-6">
      <div className="text-5xl sm:text-7xl md:text-9xl lg:text-8xl font-mono mt-4 p-4 text-black">
        {`${timeLeft.days}d ${timeLeft.hours
          .toString()
          .padStart(2, "0")}:${timeLeft.minutes
          .toString()
          .padStart(2, "0")}:${timeLeft.seconds.toString().padStart(2, "0")}`}
      </div>
    </div>
  );
}
