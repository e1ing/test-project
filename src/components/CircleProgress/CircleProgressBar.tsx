import React, { useState, useEffect, FC } from "react";
import "./CircleProgressBar.scss";

interface CircleProgressBarProps {
  seconds: number;
}

export const CircleProgressBar: FC<CircleProgressBarProps> = ({ seconds }) => {
  const [s, setTime] = useState(seconds);
  const [over, setOver] = React.useState(false);

  const tick = () => {
    if (over) return;
    setTime(s - 1);
  };

  useEffect(() => {
    const timerID = setInterval(() => s > 0 && tick(), 1000);
    return () => clearInterval(timerID);
  });

  let radius = 2 * Math.PI * 9;
  let strokeDasharray = `${radius}, ${radius}`;
  // let strokeDashOffset = radius;

  const setProgress = (sec: number) => {
    let percent = (100 * s) / (sec);
    return radius - (percent / 100) * radius;
  };

  return (
    <div
      className="cirlce-progress-bar_container"
      onMouseOver={() => setOver(true)}
    >
      <svg className="cirlce-progress-bar_svg">
        <circle
          className="cirlce-progress-bar_spin"
          cx="16"
          cy="16"
          r="9"
          style={{
            strokeDashoffset: `${setProgress(10)}`,
            strokeDasharray: `${strokeDasharray}`,
          }}
        />
      </svg>
      <div className="cirlce-progress-bar_value">{s}</div>
    </div>
  );
};
