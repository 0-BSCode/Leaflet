import React from "react";

export function useTimer(callback: () => void, delay: number) {
  const [timerId, setTimerId] = React.useState<NodeJS.Timeout | null>(null);

  function resume() {
    if (timerId) {
      return;
    }

    setTimerId(setInterval(callback, delay));
  }

  function pause() {
    if (timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
    }
  }

  return {
    resume,
    pause,
  };
}
