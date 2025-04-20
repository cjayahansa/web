import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from ".././Navbar/Navbar";
import "./Contac.css";

export default function Contac() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "Ydb0edc40-a8f1-4309-a5f6-443af28e54bc");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: json,
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
    };
    return (
        <>
            <Navbar />
            <div class="container">
                <form onSubmit={onSubmit}>
                    <h2>Contact Form</h2>
                    <div class="input-box">
                        <label>First Name</label>
                        <input
                            type="text"
                            class="feild-name"
                            name="Fist name"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>
                    <div class="input-box">
                        <label>Last Name</label>
                        <input
                            type="text"
                            class="feild-name"
                            name="Last name"
                            placeholder="Enter your last name"
                            required
                        />
                    </div>
                    <div class="input-box">
                        <label>Email</label>
                        <input type="email" class="feild-name" name="email" placeholder="Enter your email" required />
                    </div>
                    <div class="input-box">
                        <label>Message</label>
                        <textarea
                            class="feild-name"
                            name="message"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>

                <div class="contac-info">
                    <p>
                        Whether you have a question, a project idea, or just want to say hi — I’d love to hear from you!
                        I try to respond to all messages as quickly as possible. Feel free to use the form or reach out
                        through any of my social media links.
                    </p>
                </div>
            </div>
        </>
    );
}
