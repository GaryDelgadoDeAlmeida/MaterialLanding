import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {

    return (
        <div className={"page"}>
            <div className={"page-header"}>
                <div className={"header-wrapper"}>
                    {/* Desktop Menu */}
                    <div className={"desktop-menu"}>
                        <div className={"-left"}>
                            <Link to={"/"}><b>Material</b> Landing</Link>
                        </div>
                        <div className={"-right"}>
                            <nav className={"menu"}>
                                <li><a href="/#about">About</a></li>
                                <li><a href="/#projects">Projects</a></li>
                                <li><a href="/#pricing">Pricing</a></li>
                                <li><a href="/#teams">Teams</a></li>
                                <li><a href="/#contactus">Contact</a></li>
                                <li><a className={"btn btn-secondary btn-xl"} href="#">Download</a></li>
                            </nav>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={"mobile-menu"}>
                        <input id={"menubars"} type={"checkbox"} hidden />
                        <label className={"labelBars"} htmlFor={"menubars"}>
                            <img src={`${window.location.origin}/content/svg/bars.svg`} alt={""} />
                        </label>
                        
                        <div className={"mobile-menu"}>
                            <div className={"mobile-menu-widget"}>
                                <label className={"labelBars"} htmlFor={"menubars"}>
                                    <img src={`${window.location.origin}/content/svg/bars.svg`} alt={""} />
                                </label>

                                <nav className={"menu"}>
                                    <li className={"-item"}><a href={"/"}>Home</a></li>
                                    <li className={"-item"}><a href={"/#about"}>About</a></li>
                                    <li className={"-item"}><a href={"/#projects"}>Projects</a></li>
                                    <li className={"-item"}><a href={"/#pricing"}>Pricing</a></li>
                                    <li className={"-item"}><a href={"/#teams"}>Team</a></li>
                                    <li className={"-item"}><a href={"/#contactus"}>Contact</a></li>
                                    <li className={"-item"}><a className={"btn btn-blue"} href={"#"}>Download</a></li>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"page-content"}>
                {props.children}
            </div>
            <div className={"page-footer"}>
                <div className={"footer-wrapper"}>
                    <div className={"footer-social-links"}>
                        <a className={"-social-link"} href="#" target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/facebook-white.svg`} alt={"facebook"} />
                        </a>
                        <a className={"-social-link"} href="#" target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/twitter-white.svg`} alt={"twitter"} />
                        </a>
                        <a className={"-social-link"} href="#" target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/pinterest-white.svg`} alt={"pinterest"} />
                        </a>
                        <a className={"-social-link"} href="#" target={"_blank"}>
                            <img src={`${window.location.origin}/content/svg/linkedin-white.svg`} alt={"linkedin"} />
                        </a>
                    </div>
                    <div className={"footer-copyright"}>
                        <p>&copy; Material Landing - Realised by <a href={"https://garry-almeida.com/"} target={"_blank"}>Garry ALMEIDA</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}