import React, { useState, useEffect } from "react";
import CountUp from "../ExternalComponents/Countup";
import GradientText from "../ExternalComponents/GradientText";

const SplashPage = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [countdown, setCountdown] = useState(100);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 32); // around 3.2s total
      return () => clearInterval(timer);
    } else {
      setTransitionComplete(true);
      setTimeout(() => {
        setShowSplash(false);
      }, 500);
    }
  }, [countdown]);

  // Calculate percentage for the loading bar
  const progressPercent = 115 - countdown;

  return (
    <div>
      {/* Splash Page */}
      {showSplash && (
        <div
          className={`fixed text-9xl font-extrabold top-0 left-0 right-0 bottom-0 dark:bg-neutral-950 dark:text-white bg-white text-black flex flex-col justify-center items-center z-50 transition-transform duration-1000 ease-in-out border-b border-b-neutral-700 dark:shadow-neutral-800 shadow-2xl transform ${
            transitionComplete ? "translate-y-[-100%]" : "translate-y-0"
          }`}
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <CountUp
              from={0}
              to={100}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />

            {/* Loading Bar */}
            <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-neutral-500 transition-all duration-75 ease-in-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SplashPage;
