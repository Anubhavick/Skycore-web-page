
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-gray border-t border-gray-100/10 mt-16">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <Link to="/" className="text-white text-2xl font-bold flex items-center">
                           <i className="fa-solid fa-jet-fighter mr-3 text-brand-blue"></i>
                            AeroLeap
                        </Link>
                        <p className="text-brand-light-gray text-sm">Empowering Tomorrow’s Aviators with world-class training and infrastructure.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-brand-light-gray hover:text-brand-blue"><i className="fab fa-linkedin fa-lg"></i></a>
                            <a href="#" className="text-brand-light-gray hover:text-brand-blue"><i className="fab fa-instagram fa-lg"></i></a>
                            <a href="#" className="text-brand-light-gray hover:text-brand-blue"><i className="fab fa-youtube fa-lg"></i></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/about" className="text-base text-brand-light-gray hover:text-white">About Us</Link></li>
                            <li><Link to="/courses" className="text-base text-brand-light-gray hover:text-white">Courses</Link></li>
                            <li><Link to="/contact" className="text-base text-brand-light-gray hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Courses</h3>
                        <ul className="mt-4 space-y-4">
                            <li><Link to="/courses/cpl" className="text-base text-brand-light-gray hover:text-white">CPL Training</Link></li>
                            <li><Link to="/courses/atpl" className="text-base text-brand-light-gray hover:text-white">ATPL Ground School</Link></li>
                            <li><Link to="/courses/drone" className="text-base text-brand-light-gray hover:text-white">Drone Piloting</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact Us</h3>
                        <ul className="mt-4 space-y-4 text-brand-light-gray">
                            <li className="flex items-start"><i className="fa-solid fa-map-marker-alt mt-1 mr-3 text-brand-blue"></i>123 Aviation Rd, Delhi, India</li>
                            <li className="flex items-start"><i className="fa-solid fa-phone mt-1 mr-3 text-brand-blue"></i>+91 98765 43210</li>
                            <li className="flex items-start"><i className="fa-solid fa-envelope mt-1 mr-3 text-brand-blue"></i>admissions@aeroleap.com</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 text-center text-base text-brand-light-gray">
                    &copy; {new Date().getFullYear()} AeroLeap Flight Academy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
