import React from "react";

export default function Teams() {

    return (
        <section className={"page-section"}>
            <div className={"page-wrapper"}>
                <h3 className={"page-title"}>Our team members</h3>
                <p className={"page-description"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores. Vel facere maiores 33 magni voluptas et debitis animi sed unde perspiciatis non accusamus nobis et inventore nemo non natus reiciendis. Sed dignissimos delectus ad perspiciatis velit ut libero sequi.</p>

                <div className={"teams-list"}>
                    <div className={"team-card"}>
                        <div className={"-header"}>
                            <img src={`${window.location.origin}/content/img/avatar.png`} alt={""} />
                        </div>
                        <div className={"-content"}>
                            <label className={"-fullname"}>Garry ALMEIDA</label>
                            <span className={"-job"}>Developer Fullstack</span>
                            <p className={"-bio"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores. Vel facere maiores 33 magni voluptas et debitis animi sed unde perspiciatis non accusamus nobis et inventore nemo non natus reiciendis. Sed dignissimos delectus ad perspiciatis velit ut libero sequi.</p>
                            <a className={"-social-link"} href={"#"} target={"_blank"}>
                                <img src={`${window.location.origin}/content/svg/twitter.svg`} alt={""} />
                                <span>@garryalmeida</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}