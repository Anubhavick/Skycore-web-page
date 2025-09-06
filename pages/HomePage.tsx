
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES, TESTIMONIALS, ICONS } from '../constants';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';

interface HomePageProps {
    onEnquireClick: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onEnquireClick }) => {
    return (
        <div className="space-y-24 md:space-y-32">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white -mt-20">
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                <img src="/assets/hero-image.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Airplane cockpit" />
                <div className="relative z-20 max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">
                        Empowering <span className="text-[#6ED25D]">Tomorrow's Aviators</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8">
                        World-class flight training for aspiring pilots. Your journey to the cockpit starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/courses" className="w-full sm:w-auto bg-[#6ED25D] text-brand-dark font-bold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                            Explore Courses
                        </Link>
                        <button onClick={onEnquireClick} className="w-full sm:w-auto bg-transparent border-2 border-[#6ED25D] text-[#6ED25D] font-bold py-3 px-8 rounded-md hover:bg-brand-blue hover:text-brand-dark transition-colors duration-300">
                            Enquire Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Quick About Strip */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <img/>
                        <h3 className="mt-4 text-xl font-bold">Certified Instructors</h3>
                        <p className="mt-2 text-brand-light-gray">Learn from seasoned pilots with thousands of hours of experience.</p>
                    </div>
                    <div className="p-6">
                        <img/>
                        <h3 className="mt-4 text-xl font-bold">Real-World Training</h3>
                        <p className="mt-2 text-brand-light-gray">Our curriculum focuses on practical skills for real cockpit scenarios.</p>
                    </div>
                    <div className="p-6">
                        <img/>
                        <h3 className="mt-4 text-xl font-bold">DGCA Focused</h3>
                        <p className="mt-2 text-brand-light-gray">Structured courses designed to help you ace all DGCA examinations.</p>
                    </div>
                </div>
            </section>

            {/* Courses Preview */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Premier Courses</h2>
                    <p className="mt-4 text-lg text-brand-light-gray max-w-2xl mx-auto">
                        Whether you're starting fresh or advancing your career, we have a program tailored for you.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COURSES.slice(0, 3).map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/courses" className="text-brand-blue font-semibold hover:underline">
                        View All Courses <i className="fa-solid fa-arrow-right ml-1"></i>
                    </Link>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-brand-gray py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
                        <p className="mt-4 text-lg text-brand-light-gray">
                            Hear from the pilots who have successfully launched their careers with us.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TESTIMONIALS.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
