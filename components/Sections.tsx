import React from 'react';
import { INSTRUCTORS } from '../constants';

export const AboutSection: React.FC = () => {
    const pillars = [
        { icon: 'fa-graduation-cap', title: 'Skill', description: 'Mastery of flight through rigorous, hands-on training.' },
        { icon: 'fa-lightbulb', title: 'Clarity', description: 'Deep understanding of complex aviation theories and regulations.' },
        { icon: 'fa-shield-halved', title: 'Confidence', description: 'Building command presence and decision-making skills for the cockpit.' },
        { icon: 'fa-certificate', title: 'Certification', description: 'Dedicated support to pass DGCA exams and obtain your licenses.' },
    ];

    return (
        <section id="about-section" className="bg-brand-dark text-white">
            {/* Page Header */}
            <div className="bg-brand-gray py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">About AeroLeap Academy</h1>
                <p className="mt-4 text-lg text-brand-light-gray">Pioneering the future of aviation training.</p>
            </div>

            {/* Mission & Vision */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[#6ED25D] mb-4">Our Mission</h2>
                        <p className="text-brand-light-gray leading-relaxed">
                            To provide aspiring pilots with the most advanced, safety-oriented, and comprehensive flight training available. We are committed to fostering a culture of excellence, discipline, and passion for aviation, ensuring our graduates are not just licensed pilots, but future leaders in the industry.
                        </p>
                    </div>
                    <div>
                         <img src="/image0.jpg" alt="Flight school hangar" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-brand-gray py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">Why Choose AeroLeap?</h2>
                        <p className="mt-4 text-lg text-brand-light-gray">Our training is built on four foundational pillars.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pillars.map(pillar => (
                            <div key={pillar.title} className="group bg-brand-dark p-8 rounded-lg text-center border border-gray-100/10 transition-all duration-300 hover:border-[#6ED25D]/50 hover:shadow-lg hover:shadow-[#6ED25D]/10">
                                <i className={`fa-solid ${pillar.icon} text-4xl text-[#6ED25D] mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}></i>
                                <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                                <p className="text-brand-light-gray">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instructors/Team */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Meet Our Expert Instructors</h2>
                    <p className="mt-4 text-lg text-brand-light-gray">Learn from the best in the industry.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {INSTRUCTORS.map(instructor => (
                        <div key={instructor.name} className="bg-brand-gray rounded-lg overflow-hidden text-center border border-gray-100/10">
                            {instructor.imageUrl ? (
                                <img src={instructor.imageUrl} alt={instructor.name} className="w-full h-80 object-cover" />
                            ) : (
                                <div className="w-full h-80 bg-gray-900 flex items-center justify-center">
                                    <span className="text-brand-light-gray">No image</span>
                                </div>
                            )}
                            <div className="p-6">
                                <h3 className="text-xl font-bold">{instructor.name}</h3>
                                <p className="text-[#6ED25D] font-semibold">{instructor.title}</p>
                                <p className="mt-4 text-sm text-brand-light-gray">{instructor.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Accreditations */}
             <section className="bg-brand-gray py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">Accreditations & Partnerships</h2>
                        <p className="mt-4 text-lg text-brand-light-gray">We are recognized by leading aviation authorities.</p>
                         <div className="mt-8 flex justify-center items-center space-x-8 md:space-x-12 grayscale opacity-60">
                            <p className="text-2xl font-bold">DGCA</p>
                             <p className="text-2xl font-bold">IATA</p>
                             <p className="text-2xl font-bold">ICAO</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export const ContactSection: React.FC = () => {
    return (
        <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form Placeholder */}
                <div className="bg-brand-gray p-8 rounded-lg border border-gray-100/10">
                    <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                    <p className="text-brand-light-gray">Use the enquiry form to contact us.</p>
                </div>

                {/* Contact Details & Map */}
                <div className="space-y-8">
                    <div>
                         <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                         <div className="space-y-4 text-lg">
                            <p className="flex items-start">
                                <i className="fa-solid fa-map-marker-alt mt-1 mr-4 text-[#6ED25D] w-6 text-center"></i>
                                <span className="text-brand-light-gray">123 Aviation Road, Near IGI Airport, New Delhi, 110037, India</span>
                            </p>
                            <p className="flex items-center">
                                <i className="fa-solid fa-phone mr-4 text-[#6ED25D] w-6 text-center"></i>
                                <a href="tel:+919876543210" className="text-brand-light-gray hover:text-[#6ED25D]">+91 xxxxx xxxxx</a>
                            </p>
                            <p className="flex items-center">
                                <i className="fa-solid fa-envelope mr-4 text-[#6ED25D] w-6 text-center"></i>
                                <a href="mailto:admissions@aeroleap.com" className="text-brand-light-gray hover:text-[#6ED25D]">skycore@gmail.com</a>
                            </p>
                             <p className="flex items-center">
                                <i className="fa-solid fa-clock mr-4 text-[#6ED25D] w-6 text-center"></i>
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
        </section>
    );
};

export default {} as never;
