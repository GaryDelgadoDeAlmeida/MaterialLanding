import React from "react";

export default function Portfolios() {

    return (
        <section className={"page-section portfolios"}>
            <div className={"page-wrapper"}>
                <h3 className={"page-title"}>Our best projects</h3>
                <p className={"page-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores. Vel facere maiores 33 magni voluptas et debitis animi sed unde perspiciatis non accusamus nobis et inventore nemo non natus reiciendis. Sed dignissimos delectus ad perspiciatis velit ut libero sequi.</p>

                <div className={"-portfolios-list"}>
                    <div className={"portfolio-card"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/portfolios/1.jpg`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <div className={"-categories"}>
                                <div className={"-category"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/svg/book.svg`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <label className={"-title"}>Education</label>
                                        <p className={"-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                                    </div>
                                </div>
                                <div className={"-category"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/svg/code.svg`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <label className={"-title"}>Category</label>
                                        <p className={"-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                                    </div>
                                </div>
                                <div className={"-category"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/svg/money.svg`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <label className={"-title"}>Finance</label>
                                        <p className={"-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"portfolio-card"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/portfolios/1.jpg`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <div className={"-categories"}>
                                <div className={"-category"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/svg/book.svg`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <label className={"-title"}>Education</label>
                                        <p className={"-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                                    </div>
                                </div>
                                <div className={"-category"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/svg/code.svg`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <label className={"-title"}>Category</label>
                                        <p className={"-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                                    </div>
                                </div>
                                <div className={"-category"}>
                                    <div className={"-header"}>
                                        <img src={`${window.location.origin}/content/svg/money.svg`} alt={""} />
                                    </div>
                                    <div className={"-content"}>
                                        <label className={"-title"}>Finance</label>
                                        <p className={"-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}