import React from "react";
import "./footer.scss";
import { FaGithub, FaLinkedin, FaGlobe, FaMedium, FaDev } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <div className="left-align">
                <p>
                    Developed & Designed with{" "}
                    <span className="purple-heart">❤️</span> by
                    <a
                        href="https://github.com/shivammishra2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Me
                    </a>
                    .
                </p>
            </div>
            <div className="center-align">
                <p>&copy; Shivam Mishra 2024</p>
            </div>
            <div className="right-align social-icons">
                <a
                    href="https://github.com/shivammishra2004"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/shivam-mishra-67671a17a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://mail.google.com/mail/?view=cm&to=shivam.mishra.ug23@nsut.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <CiMail />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
