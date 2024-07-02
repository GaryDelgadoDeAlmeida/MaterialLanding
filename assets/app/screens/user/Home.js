import React from "react";
import Header from "../../components/Header";
import Services from './parts/Services';
import About from "./parts/About";
import Portfolios from "./parts/Portfolios";
import Pricing from "./parts/Pricing";
import Teams from "./parts/Teams";
import Contact from "./parts/Contact";

export default function Home() {

  return (
    <Header>
        <div className={"page-hero"}>
            <div className={"hero-background"}>
                <img src={`${window.location.origin}/content/img/background-hero.jpg`} alt={""} />
                <div className={"hero-superposition"}></div>
            </div>
            <div className={"hero-wrapper"}>
                <div className={"page-wrapper"}>
                    <div className={"w-50"}>
                        <h1 className={"-hero-title"}>Your Success is Our Mission</h1>
                        <p className={"-hero-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores. Vel facere maiores 33 magni voluptas et debitis animi sed unde perspiciatis non accusamus nobis et inventore nemo non natus reiciendis. Sed dignissimos delectus ad perspiciatis velit ut libero sequi.</p>
                        <div className={""}>
                            <a className={"btn btn-white btn-xl -inline-flex"} href={"#aboutus"}>
                                <img src={`${window.location.origin}/content/svg/play.svg`} alt={""} />
                                <span>View demo</span>
                            </a>
                            <a className={"btn btn-outline-white btn-xl"} href={"#aboutus"}>Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Services />

        <About />

        <Portfolios />

        <Pricing />

        <Teams />

        <Contact />
    </Header>
  )
}