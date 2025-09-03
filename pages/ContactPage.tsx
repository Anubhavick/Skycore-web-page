
import React from 'react';
import EnquiryForm from '../components/EnquiryForm';

const ContactPage: React.FC = () => {
    return (
        <div>
            {/* Page Header */}
            <div className="bg-brand-gray py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Get In Touch</h1>
                <p className="mt-4 text-lg text-brand-light-gray">We're here to answer your questions and help you start your aviation journey.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-brand-gray p-8 rounded-lg border border-gray-100/10">
                        <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                        <EnquiryForm />
                    </div>

                    {/* Contact Details & Map */}
                    <div className="space-y-8">
                        <div>
                             <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                             <div className="space-y-4 text-lg">
                                <p className="flex items-start">
                                    <i className="fa-solid fa-map-marker-alt mt-1 mr-4 text-brand-blue w-6 text-center"></i>
                                    <span className="text-brand-light-gray">123 Aviation Road, Near IGI Airport, New Delhi, 110037, India</span>
                                </p>
                                <p className="flex items-center">
                                    <i className="fa-solid fa-phone mr-4 text-brand-blue w-6 text-center"></i>
                                    <a href="tel:+919876543210" className="text-brand-light-gray hover:text-brand-blue">+91 98765 43210</a>
                                </p>
                                <p className="flex items-center">
                                    <i className="fa-solid fa-envelope mr-4 text-brand-blue w-6 text-center"></i>
                                    <a href="mailto:admissions@aeroleap.com" className="text-brand-light-gray hover:text-brand-blue">admissions@aeroleap.com</a>
                                </p>
                                 <p className="flex items-center">
                                    <i className="fa-solid fa-clock mr-4 text-brand-blue w-6 text-center"></i>
                                    <span className="text-brand-light-gray">Mon - Sat: 9:00 AM - 6:00 PM</span>
                                </p>
                             </div>
                        </div>
                        {/* Map Placeholder */}
                        <div className="h-80 bg-brand-gray rounded-lg border border-gray-100/10 flex items-center justify-center">
                             <p className="text-brand-light-gray">Google Maps Embed Placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
