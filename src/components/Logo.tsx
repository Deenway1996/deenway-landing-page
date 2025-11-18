import React from "react";

const Logo = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "text-xl",
    md: "text-3xl",
    lg: "text-5xl font-bold"
  };

  return (
    <span className={`${sizes[size]} font-bold text-primary ${className}`}>
      Deenway
    </span>
  );
};

export default Logo;
