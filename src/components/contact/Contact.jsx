import React from "react";
import './contact.css';
import email from '../assets/email.png';


const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2>Contact me:</h2>
            <div className="contact__name">
                <input type="text" placeholder="Your name"></input>
            </div>
            <div className="contact__email">
                <input type="email" placeholder="Your email"></input>
            </div>
            
            <div className="contact__message">
                <textarea name="message" placeholder="Enter your message" rows={"13"} cols={"50"}></textarea>
            </div>
            <button type="button">Send</button>
            <div className="additional__contact">
                <div className="add__contact">
                    <img src={email} alt="email" />
                    <p>Or text me at:</p>
                </div>
                <p>ayooluomoyiola@gmail.com</p>
            </div>
        </div>
    )
}

export default Contact;