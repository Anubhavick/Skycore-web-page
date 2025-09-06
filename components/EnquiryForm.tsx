
import React, { useState } from 'react';

const EnquiryForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would integrate a service like EmailJS or Formspree
        console.log('Form data submitted:', formData);
        setSubmitted(true);
        // Reset form after a few seconds
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
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
                    className="w-full bg-[#6ED25D] text-brand-dark font-bold py-3 px-4 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
                >
                    Send Enquiry
                </button>
            </div>
        </form>
    );
};

export default EnquiryForm;
