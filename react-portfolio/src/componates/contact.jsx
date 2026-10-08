import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you ${form.name}! Your message payload was captured successfully.`);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <div>
                <div>
                    <div>
                        <h2>Get In Touch</h2>
                        <p>Have an open project initialization request? Drop a message line to discuss timeline logistics.</p>
                    </div>
                    <div className="contact-details" aria-label="Contact details">
                        <div className="contact-detail-row">
                            <div><Mail /></div>
                            <div>
                                <p>Email Address</p>
                                <a href="mailto:hello@example.com">hello@example.com</a>
                            </div>
                        </div>
                        <div className="contact-detail-row">
                            <div><Phone /></div>
                            <div>
                                <p>Call Directly</p>
                                <p>+1 (555) 019-2834</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Message Content</label>
                            <textarea
                                id="message"
                                rows="4"
                                required
                                value={form.message}
                                onChange={(event) => setForm({ ...form, message: event.target.value })}
                                placeholder="Describe project details..."
                            />
                        </div>
                        <button type="submit">
                            Send Message <Send />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}


