import React, { useEffect, useState } from "react";

const DinoGame: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ width: "100%", height: "40vh", textAlign: "center" }}>
            <h2
                style={{
                    marginTop: "2rem",
                    marginBottom: "4rem",
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
                        top: isMobile ? "-150px" : "-100px",
                        left: "50%",
                        transform: `translateX(-50%) scale(${isMobile ? 1.1 : 1.3})`,
                        width: isMobile ? "70%" : "60%",
                        height: isMobile ? "36vh" : "36vh",
                        border: "none",
                        zIndex: 999,
                    }}
                />
            </div>
        </div>
    );
};

export default DinoGame;
