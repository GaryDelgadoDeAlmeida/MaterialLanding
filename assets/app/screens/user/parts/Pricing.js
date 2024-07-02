import React from "react";

export default function Pricing() {

    return (
        <section className={"page-section bg-secondary c-white"}>
            <div className={"page-wrapper"}>
                <h3 className={"page-title"}>Pricing</h3>
                <p className={"page-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores. Vel facere maiores 33 magni voluptas et debitis animi sed unde perspiciatis non accusamus nobis et inventore nemo non natus reiciendis. Sed dignissimos delectus ad perspiciatis velit ut libero sequi.</p>

                <div className={"pricing-list"}>
                    <div className={"price-card -gray"}>
                        <div className={"-top"}>
                            <span>Individual</span>
                        </div>
                        <div className={"-center"}>
                            <label><sup>€</sup>900 / months</label>
                        </div>
                        <div className={"-bottom"}>
                            <ul>
                                <li><b>1</b> person</li>
                                <li><b>10</b> projects</li>
                                <li><b>100</b> features</li>
                                <li><b>20GB</b> storage</li>
                            </ul>

                            <a className={"btn btn-ouline-white"} href="/#contact-us">Buy now</a>
                        </div>
                    </div>
                    <div className={"price-card -blue"}>
                        <div className={"-top"}>
                            <span>Startup</span>
                        </div>
                        <div className={"-center"}>
                            <label><sup>€</sup>900 / months</label>
                        </div>
                        <div className={"-bottom"}>
                            <ul>
                                <li><b>10</b> person</li>
                                <li><b>100</b> projects</li>
                                <li><b>200</b> features</li>
                                <li><b>100GB</b> storage</li>
                            </ul>

                            <a className={"btn btn-ouline-white"} href="/#contact-us">Buy now</a>
                        </div>
                    </div>
                    <div className={"price-card -red"}>
                        <div className={"-top"}>
                            <span>Entreprise</span>
                        </div>
                        <div className={"-center"}>
                            <label><sup>€</sup>900 / months</label>
                        </div>
                        <div className={"-bottom"}>
                            <ul>
                                <li><b>10+</b> person</li>
                                <li><b>Unlimited</b> projects</li>
                                <li><b>Unlimited</b> features</li>
                                <li><b>1TB</b> storage</li>
                            </ul>

                            <a className={"btn btn-ouline-white"} href="/#contact-us">Buy now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}