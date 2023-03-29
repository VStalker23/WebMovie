import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css'


const FORM_ENDPOINT = ""; 

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div className="contact-view p-5 mb4" style={{ color: 'lightslategrey',  }}>
            <h1 className="me-auto, center-navbar" style={{ fontSize: 26, color:"greenyellow"}} >
                Contact with Us<span style={{ color:"red"}}> !</span>
            </h1>
            <p className="me-auto, center-navbar " style={{ fontSize: 20 , color:"green" }}>If you want talking or more information about webSite you can connect with us here</p>
            <form className="me-auto, center-navbar p-5 mb-4 "
                autoComplete="off"
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
            >
                <div className="mb-3 pt-0">
                    <input
                        type="text"
                        placeholder="Your name"
                        name="name"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        placeholder="Your message"
                        name="message"
                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <button
                        className="px-2 py-2 "
                        style={{ color: 'gold', backgroundColor: 'grey'}}
                        type="submit"

                    >
                        Send a message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;