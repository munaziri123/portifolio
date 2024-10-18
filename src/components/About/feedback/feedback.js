import React, { useState } from 'react';
import { Client, Databases } from 'appwrite';
import"./feedback.css";

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [feedback, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') 
        .setProject('65fda7ea0aa1771a1f5b'); 

    const databases = new Databases(client);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         await databases.createDocument(
                '66a798e000030f6c48f6', 
                '671243e300052cfcb546', 
                'unique()', 
                {
                    email,
                    phone,
                    feedback,
                }
            );
            setStatus('Message sent successfully!');
        } catch (error) {
            setStatus('Failed to send message.');
            console.error(error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Contact Us</h2>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                {status && <p>{status}</p>}
            </form>
        </div>
    );
};

export default ContactForm;