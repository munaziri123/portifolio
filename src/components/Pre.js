import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}>
        <div style={{
          width: "60px",
          height: "60px",
          border: "4px solid rgba(255,255,255,0.3)",
          borderTop: "4px solid white",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}></div>
        <p style={{
          color: "white",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          letterSpacing: "0.05em",
        }}>MUNAZIRI Josue</p>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default Pre;
