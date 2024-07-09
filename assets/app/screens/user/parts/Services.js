import React from "react";

export default function Services() {

    return (
        <section className={"page-section page-services"}>
            <div className={"service-card"}>
                <div className={"-header"}>
                    <img src={`${window.location.origin}/content/svg/graph-white.svg`} alt={""} />
                    <label className={"-title"}>Agile Frameworks</label>
                </div>
                <div className={"-content"}>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
                </div>
            </div>
            <div className={"service-card"}>
                <div className={"-header"}>
                    <img src={`${window.location.origin}/content/svg/factory-white.svg`} alt={""} />
                    <label className={"-title"}>Corporate Strategy</label>
                </div>
                <div className={"-content"}>
                    <p>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                </div>
            </div>
            <div className={"service-card"}>
                <div className={"-header"}>
                    <img src={`${window.location.origin}/content/svg/users-white.svg`} alt={""} />
                    <label className={"-title"}>Workplace diversity</label>
                </div>
                <div className={"-content"}>
                    <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and eloiwerment.</p>
                </div>
            </div>
            <div className={"service-card"}>
                <div className={"-header"}>
                    <img src={`${window.location.origin}/content/svg/megaphone-white.svg`} alt={""} />
                    <label className={"-title"}>Survival strategy</label>
                </div>
                <div className={"-content"}>
                    <p>bring to the table win-win survival strategies to ensure proactive domination.</p>
                </div>
            </div>
        </section>
    )
}