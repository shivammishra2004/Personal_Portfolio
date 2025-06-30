import React from "react";

const DinoGame: React.FC = () => {
    return (
        <div style={{ width: "100%", height: "40vh", textAlign: "center" }}>
            <h2
                style={{
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    fontSize: "1.6rem",
                    color: "#fff",
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
            >
                Hope you enjoyed the portfolio — now relax and let the dino run 🦕
            </h2>
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "80vh",
                    overflow: "hidden",
                }}
            >
                <iframe
                    src="https://chromedino.com/"
                    frameBorder="0"
                    scrolling="no"
                    loading="lazy"
                    style={{
                        position: "absolute",
                        top: "-100px", // Adjust to show middle part
                        left: "50%",
                        transform: "translateX(-50%) scale(1.3)",
                        width: "60%",
                        height: "36vh", // Large internal height for cropping
                        border: "none",
                        zIndex: 999,
                    }}
                />
            </div>
        </div>
    );
};

export default DinoGame;
