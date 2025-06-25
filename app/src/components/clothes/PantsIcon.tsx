
import React from "react";

export const PantsIcon = ({
  size = 100,
  color = "#888"
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    aria-label="Pants"
  >
    <rect
      x="18"
      y="24"
      width="11"
      height="30"
      rx="3"
      fill={color}
      stroke="#444"
      strokeWidth="2"
    />
    <rect
      x="35"
      y="24"
      width="11"
      height="30"
      rx="3"
      fill={color}
      stroke="#444"
      strokeWidth="2"
    />
    <rect
      x="18"
      y="18"
      width="28"
      height="10"
      rx="5"
      fill={color}
      stroke="#444"
      strokeWidth="2"
    />
  </svg>
);
