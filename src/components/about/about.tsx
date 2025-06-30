import React, { useState, useEffect } from "react";
import "./about.scss";

import tjklint6 from "../../assets/me/webp/shivam1.jpg";

const photos = [tjklint6];

const About: React.FC = () => {
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
        setPhoto(randomPhoto);
    }, []);

    return (
        <div className="about-container" id="about">
            <section className="about-intro">
                <div className="about-text">
                    <h2 className="about-title">About Me</h2>
                    <p>
                        Hello! My name is{" "}
                        <span className="purple-text">Shivam Mishra</span> — a
                        full-time B.Tech student at{" "}
                        <span className="purple-text">NSUT</span> and a
                        full-time geek by passion. Currently in my{" "}
                        <span className="purple-text">third year</span>, I’m
                        diving deep into Computer Science and Engineering with a
                        CGPA of 8.51 and an ever-growing curiosity for
                        everything
                        <span className="purple-text">
                            web development
                        </span> and{" "}
                        <span className="purple-text">
                            competitive programming
                        </span>
                        .
                    </p>
                    <p>
                        Right now, I’m focusing heavily on frontend development
                        — I’ve been building fast, modular interfaces using{" "}
                        <span className="purple-text">
                            React, TypeScript, and Tailwind
                        </span>
                        , while also steadily working through the backend side
                        of things with{" "}
                        <span className="purple-text">
                            Node.js, Express, Django, and FastAPI
                        </span>
                        . I recently interned as a Frontend Developer at NSUT,
                        where I contributed to a MOOC Validator Portal that
                        helped 7,500+ students verify their certificates.
                    </p>
                    <p>
                        When I’m not coding, I’m{" "}
                        <span className="purple-text">
                            tweaking my workflow
                        </span>
                        . I’m obsessed with custom setups — from writing scripts
                        in AutoHotkey to using a browser stacked with power
                        extensions. I use{" "}
                        <span className="purple-text">Vim</span> like a
                        religion.
                    </p>
                    {/* <p>
                        I love building for others too. Some of my recent
                        projects include{" "}
                        <span className="purple-text">NextContest</span> — a
                        coding contest tracker Chrome Extension with 200+ users,
                        and <span className="purple-text">IndieType</span> — a
                        typing app supporting 10 Indian languages designed for a
                        clean, focused experience.
                    </p> */}
                    {/* <p>
                        I’m also active in the competitive programming scene —
                        with 700+ problems solved and a{" "}
                        <span className="purple-text">Pupil</span> rating on
                        Codeforces. I placed{" "}
                        <span className="purple-text">Top 12 in COD COM</span>{" "}
                        (IIT Ropar) and{" "}
                        <span className="purple-text">
                            Top 20 in InnovateNSUT
                        </span>{" "}
                        out of 2,078+ teams.
                    </p> */}
                    {/* <p>
                        Outside of tech, you’ll likely find me exploring new
                        productivity hacks, scripting my way out of boring
                        tasks, or customizing something most people wouldn’t
                        even think of.
                    </p> */}
                    <p>
                        If you want to keep up with what I’m building, feel free
                        to connect with me on{" "}
                        <a
                            href="https://www.linkedin.com/in/shivam-mishra-67671a17a/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://github.com/shivammishra2004"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        , or reach out via{" "}
                <a
                    href="https://mail.google.com/mail/?view=cm&to=shivam.mishra.ug23@nsut.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                            Email
                        </a>
                        .
                    </p>
                </div>
                <div className="about-photo">
                    <img src={photo} alt="Shivam" />
                </div>
            </section>
        </div>
    );
};

export default About;
