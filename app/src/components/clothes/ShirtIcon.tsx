
import React from "react";

export const ShirtIcon = ({
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
    aria-label="Shirt"
  >
    <rect
      x="20"
      y="20"
      width="24"
      height="30"
      rx="7"
      fill={color}
      stroke="#444"
      strokeWidth="2"
    />
    <polygon
      points="20,20 10,18 16,38 22,36"
      fill={color}
      stroke="#444"
      strokeWidth="1.5"
    />
    <polygon
      points="44,20 54,18 48,38 42,36"
      fill={color}
      stroke="#444"
      strokeWidth="1.5"
    />
    <ellipse
      cx="32"
      cy="14"
      rx="10"
      ry="6"
      fill={color}
      stroke="#444"
      strokeWidth="2"
    />
  </svg>
);
