import React from "react";

export default function HomePage() {
  return (
    <div style={{ padding: "100px", fontFamily: "cursive" }}>
      <h1
        className="text-center hover-underline-animation"
        style={{
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
        onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
      >
        Build Your Career In Your Dream Company
      </h1>
    </div>
  );
}
