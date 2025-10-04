import React, { useState, useEffect } from "react";
import Title from "../components/text/Title.jsx";

const CountdownTimer = () => {
    const targetDate = new Date("March 28, 2025 09:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    // Function to calculate the remaining time
    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 60000); // Update every 60 seconds

        return () => clearInterval(timer);
    }, []);

    return (
    <section
        className="mb-10 grid place-content-center gap-y-10 max-xl:grid-cols-1 max-w-screen-lg mx-auto px-4 pt-6">
        <div className="flex space-x-3 py-10 place-content-center">
                <Title>
                    <span>{String(timeLeft.days).padStart(2, "0")}D : </span>
                    <span>{String(timeLeft.hours).padStart(2, "0")}H : </span>
                    <span>{String(timeLeft.minutes).padStart(2, "0")}M</span>
                </Title>
        </div>
    </section>
    );
};

export default CountdownTimer;
