import React, { useEffect, useState } from "react";

const DinoGame: React.FC = () => {
    const [viewport, setViewport] = useState({
        isMobile: false,
        isNarrow: false,
    });

    useEffect(() => {
        const handleResize = () => {
            setViewport({
                isMobile: window.innerWidth < 768,
                isNarrow: window.innerWidth < 1280,
            });
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (viewport.isMobile) return null;

    const iframeStyle = {
        position: "absolute" as const,
        top: "-100px",
        left: "50%",
        transform: viewport.isNarrow
            ? "translateX(-55%) scale(1.1)"
            : "translateX(-50%) scale(1.3)",
        width: viewport.isNarrow ? "70%" : "60%",
        height: "36vh",
        border: "none",
        zIndex: 999,
    };

    return (
        <div style={{ width: "100%", height: "50vh", textAlign: "center" }}>
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
                    style={iframeStyle}
                />
            </div>
        </div>
    );
};

export default DinoGame;
