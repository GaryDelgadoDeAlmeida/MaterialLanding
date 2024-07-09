import React, { useState } from "react";
import Header from "../../components/Header";

export default function Login() {

    var storage = localStorage.getItem("token") ?? ""
    const [logged, setLogged] = useState(storage.length > 0 ? true : false)

    return (
        <Header>
            <section className={"page-section"}>
                <div className={"page-wrapper"}>
                    <LoginForm />
                </div>
            </section>
        </Header>
    )
}