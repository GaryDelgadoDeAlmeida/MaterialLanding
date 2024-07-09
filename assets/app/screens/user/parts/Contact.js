import React from "react";
import ContactForm from "../../../forms/ContactForm"

export default function Contact() {

    return (
        <section id={"contactus"} className={"page-section"}>
            <div className={"page-background"}>
                <img src={`${window.location.origin}/content/img/background-contact-us.jpg`} alt={""} />
                <div className={"page-superposition"}></div>
            </div>
            <div className={"page-wrapper"}>
                <h3 className={"page-title c-white"}>Contact us</h3>
                <p className={"page-description -white"}>Lorem ipsum dolor sit amet. Est galisum saepe aut quasi vitae et reiciendis asperiores id omnis quas et quod maiores. Vel facere maiores 33 magni voluptas et debitis animi sed unde perspiciatis non accusamus nobis et inventore nemo non natus reiciendis. Sed dignissimos delectus ad perspiciatis velit ut libero sequi.</p>

                <div className={"contact-infos"}>
                    <div className={"-item"}>
                        <ContactForm />
                    </div>
                    <div className={"-item"}>
                        <div className={"-contact-coordinates"}>
                            <div className={"-coordinate"}>
                                <img src={`${window.location.origin}/content/svg/pinpoint-blue.svg`} alt={""} />
                                <span>89, Avenue aux 100 gouffre aux suffres, France</span>
                            </div>
                            <div className={"-coordinate"}>
                                <img src={`${window.location.origin}/content/svg/phone-blue.svg`} alt={""} />
                                <span>(+33) 1 01 00 00 00</span>
                            </div>
                            <div className={"-coordinate"}>
                                <img src={`${window.location.origin}/content/svg/envelope-blue.svg`} alt={""} />
                                <span>gary.almeida.work@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}