import axios from "axios";
import React, { useState } from "react";

export default function ContactForm() {

    const [formResponse, setFormResponse] = useState({})
    const [credentials, setCredentials] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: ""
    })

    const resetFields = () => {
        setCredentials({
            fullname: "",
            email: "",
            subject: "",
            message: ""
        })
    }

    const handleChange = (e, fieldName) => {
        setCredentials({
            ...credentials,
            [fieldName]: e.currentTarget.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${window.location.origin}/api/contact`, credentials, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                setFormResponse({classname: "success", message: "Your message has been successfully sended."})
                resetFields()
            })
            .catch((error) => {
                let errorMessage = "An error has been encountered. Please, retry more later"
                if(error.response.data.message) {
                    errorMessage = error.response.data.message
                } else if(error.response.data.detail) {
                    errorMessage = error.response.data.detail
                }

                setFormResponse({classname: "danger", message: errorMessage})
            })
    }

    return (
        <>
            {Object.keys(formResponse).length > 0 &&
                <Notification {...formResponse} />
            }

            <form className={"form form-contact"} onSubmit={(e) => handleSubmit(e)}>
                <div className={"form-field-inline"}>
                    <div className={"form-field"}>
                        <input
                            type={"text"}
                            value={credentials.fullname}
                            placeholder={"Your name"}
                            onChange={(e) => handleChange(e, "fullname")}
                            required
                        />
                    </div>
                    <div className={"form-field"}>
                        <input
                            type={"email"}
                            value={credentials.email}
                            placeholder={"Your email"}
                            onChange={(e) => handleChange(e, "email")}
                            required
                        />
                    </div>
                </div>

                <div className={"form-field"}>
                    <input 
                        type={"text"}
                        value={credentials.subject}
                        placeholder={"Your subject"}
                        onChange={(e) => handleChange(e, "subject")}
                        required
                    />
                </div>

                <div className={"form-field"}>
                    <textarea 
                        placeholder={"Your message"}
                        onChange={(e) => handleChange(e, "message")}
                        required
                    >{credentials.message}</textarea>
                </div>

                <div className={"form-actions txt-left-force"}>
                    <button type={"submit"} className={"btn btn-primary -inline-flex"}>
                        <img src={`${window.location.origin}/content/svg/paper-plane-white.svg`} alt={""} />
                        <span>Send</span>
                    </button>
                </div>
            </form>
        </>
    )
}