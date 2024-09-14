import React from "react";

export function useTimer(callback: () => void, delay: number) {
  const [timerId, setTimerId] = React.useState<NodeJS.Timeout | null>(null);
  const [start, setStart] = React.useState<number>(Date.now());
  const [remaining, setRemaining] = React.useState<number>(delay);

  function resume() {
    if (timerId) {
      return;
    }

    setStart(Date.now());
    setTimerId(setInterval(callback, delay));
  }

  function pause() {
    if (timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
      setRemaining(remaining - (Date.now() - start));
    }
  }

  return {
    resume,
    pause,
  };
}
