
import React from 'react';
import { INSTRUCTORS } from '../constants';

const AboutPage: React.FC = () => {
    const pillars = [
        { icon: 'fa-graduation-cap', title: 'Skill', description: 'Mastery of flight through rigorous, hands-on training.' },
        { icon: 'fa-lightbulb', title: 'Clarity', description: 'Deep understanding of complex aviation theories and regulations.' },
        { icon: 'fa-shield-halved', title: 'Confidence', description: 'Building command presence and decision-making skills for the cockpit.' },
        { icon: 'fa-certificate', title: 'Certification', description: 'Dedicated support to pass DGCA exams and obtain your licenses.' },
    ];
    
    return (
        <div className="bg-brand-dark text-white">
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
                    <img src="assets/image4.jpg" alt="Flight school hangar" className="rounded-lg shadow-lg" />
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
                            <div key={pillar.title} className="group bg-brand-dark p-8 rounded-lg text-center border border-gray-100/10 transition-all duration-300 hover:border-brand-blue/50 hover:shadow-lg hover:shadow-brand-blue/10">
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
                            <img src={instructor.imageUrl} alt={instructor.name} className="w-full h-80 object-cover" />
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
        </div>
    );
};

export default AboutPage;
