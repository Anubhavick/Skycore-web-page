
import React, { useState } from 'react';

const EnquiryForm: React.FC = () => {
    // CONFIG: replace the Formspree endpoint below with your Formspree form endpoint.
    // Sign up at https://formspree.io and copy the endpoint (e.g. https://formspree.io/f/xxxxx)
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myzdlkgk';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // simple client-side validation
        if (!formData.name || !formData.email) return;

        try {
            setIsSending(true);
            setError(null);

            // Submit to Formspree
            if (FORMSPREE_ENDPOINT && !FORMSPREE_ENDPOINT.includes('YOUR_FORMSPREE_ID')) {
                const fd = new FormData();
                fd.append('name', formData.name);
                fd.append('email', formData.email);
                fd.append('phone', formData.phone);
                fd.append('message', formData.message);
                const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        // ask Formspree to return JSON instead of redirecting
                        'Accept': 'application/json'
                    },
                    body: fd,
                });
                if (!res.ok) {
                    const text = await res.text().catch(() => '');
                    throw new Error(`Formspree error ${res.status} ${text}`);
                }
            }

            console.log('Form data submitted:', formData);
            setSubmitted(true);
            setIsSending(false);
            // Reset form after a few seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', message: '' });
            }, 3000);
        } catch (err) {
            console.error('Enquiry submit failed', err);
            setError('Failed to send enquiry. Please try again later.');
            setIsSending(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center p-8 bg-brand-gray rounded-lg">
                <i className="fa-solid fa-paper-plane text-4xl text-[#6ED25D] mb-4"></i>
                <h3 className="text-xl font-bold text-white">Thank You!</h3>
                <p className="text-brand-light-gray">Your enquiry has been sent. Our team will get back to you shortly.</p>
            </div>
        );
    }
    
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-brand-gray border border-gray-100/20 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6ED25D]"
                />
            </div>
            <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-brand-gray border border-gray-100/20 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6ED25D]"
                />
            </div>
            <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-brand-gray border border-gray-100/20 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6ED25D]"
                />
            </div>
            <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    className="w-full bg-brand-gray border border-gray-100/20 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6ED25D]"
                ></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    disabled={isSending}
                    className={`w-full ${isSending ? 'bg-green-300 cursor-wait' : 'bg-[#6ED25D] hover:bg-opacity-80 transform hover:scale-105'} text-brand-dark font-bold py-3 px-4 rounded-md transition-all duration-300`}
                >
                    {isSending ? 'Sending…' : 'Send Enquiry'}
                </button>
            </div>
            {/* Accessibility: live region for error messages */}
            {error && (
                <div role="alert" aria-live="assertive" className="mt-3 text-sm text-red-400">
                    {error}
                </div>
            )}
        </form>
    );
};

export default EnquiryForm;
