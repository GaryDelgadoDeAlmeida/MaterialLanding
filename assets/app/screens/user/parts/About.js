import React from "react";

export default function About() {

    return (
        <section className={"page-section bg-gray"}>
            <div className={"page-wrapper"}>
                <h2 className={"page-title"}>Why work with us ?</h2>
                <p className={"page-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores. Vel facere maiores 33 magni voluptas et debitis animi sed unde perspiciatis.</p>

                <div className={"d-grid -col-3 -g-5"}>
                    <div className={"about-card"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/speedometer-orange.svg`} alt={""} />
                            <label className={"-title"}>Design</label>
                        </div>
                        <div className={"-content"}>
                            <p>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                        </div>
                    </div>
                    <div className={"about-card"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/chat-bubble-blue.svg`} alt={""} />
                            <label className={"-title"}>Feedback</label>
                        </div>
                        <div className={"-content"}>
                            <p>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                        </div>
                    </div>
                    <div className={"about-card"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/svg/cubes-in-stack-with-shadow-red.svg`} alt={""} />
                            <label className={"-title"}>Execution</label>
                        </div>
                        <div className={"-content"}>
                            <p>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}