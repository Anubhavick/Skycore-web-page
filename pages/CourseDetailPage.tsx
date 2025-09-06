
import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { COURSES } from '../constants';
import EnquiryForm from '../components/EnquiryForm';

interface CourseDetailPageProps {
    onEnquireClick: () => void;
}

const AccordionItem: React.FC<{ faq: { question: string; answer: string; } }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-100/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4"
            >
                <span className="font-semibold text-white">{faq.question}</span>
                <i className={`fa-solid fa-chevron-down text-[#6ED25D] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-brand-light-gray pb-4">{faq.answer}</p>
            </div>
        </div>
    );
};

const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ onEnquireClick }) => {
    const { id } = useParams<{ id: string }>();
    const course = COURSES.find(c => c.id === id);

    if (!course) {
        return <Navigate to="/courses" />;
    }

    return (
        <div>
            {/* Course Banner */}
            <div className="relative h-96">
                <img src={`${course.imageUrl}?blur=3`} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <h1 className="text-4xl md:text-6xl font-extrabold">{course.title}</h1>
                        <p className="mt-4 text-xl">{course.shortDescription}</p>
                    </div>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#6ED25D] mb-4">Course Overview</h2>
                            <p className="text-brand-light-gray leading-relaxed">{course.overview}</p>
                        </section>
                        
                        {/* Key Highlights */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#6ED25D] mb-4">Key Highlights</h2>
                             <ul className="space-y-4">
                                {course.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start text-lg">
                                        <i className="fa-solid fa-plane-circle-check text-[#6ED25D] mt-1 mr-3"></i>
                                        <span className="text-white">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        
                        {/* Details */}
                        <section className="bg-brand-gray p-6 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <p className="text-sm text-brand-light-gray">Duration</p>
                                <p className="text-xl font-bold text-white">{course.details.duration}</p>
                            </div>
                            <div>
                                <p className="text-sm text-brand-light-gray">Format</p>
                                <p className="text-xl font-bold text-white">{course.details.format}</p>
                            </div>
                            <div>
                                <p className="text-sm text-brand-light-gray">Prerequisites</p>
                                <p className="text-xl font-bold text-white">{course.details.prerequisites}</p>
                            </div>
                        </section>
                        
                        {/* FAQs */}
                        <section>
                            <h2 className="text-3xl font-bold text-[#6ED25D] mb-4">Frequently Asked Questions</h2>
                            <div className="space-y-2">
                                {course.faqs.map((faq, index) => (
                                    <AccordionItem key={index} faq={faq} />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Enquiry Form */}
                    <aside className="mt-12 lg:mt-0">
                        <div className="sticky top-24">
                            <div className="bg-brand-gray p-8 rounded-lg border border-gray-100/10">
                                <h3 className="text-2xl font-bold text-white mb-4 text-center">Enquire About This Course</h3>
                                <EnquiryForm />
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailPage;
