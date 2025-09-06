
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

interface HeaderProps {
    onEnquireClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEnquireClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = "text-brand-light-gray hover:text-brand-blue transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";
    const activeLinkClasses = "text-brand-blue";
    
    const getNavLinkClass = ({ isActive }: { isActive: boolean }) => 
        `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`;

    const navLinks = (
        <>
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
            <NavLink to="/courses" className={getNavLinkClass}>Courses</NavLink>
            <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
        </>
    );

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-gray/80 backdrop-blur-md border-b border-gray-100/10' : 'bg-black/30 backdrop-blur-sm'}`}>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white text-2xl font-bold flex items-center">
                        <img src="/assets/skycore-logo.svg" alt="Skycore Logo" className="h-8 w-8 mr-2" />
                            Skycore
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks}
                            <button onClick={onEnquireClick} className="bg-brand-blue text-brand-dark font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <i className="fa-solid fa-xmark h-6 w-6"></i>
                            ) : (
                                <i className="fa-solid fa-bars h-6 w-6"></i>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks}
                        <button onClick={onEnquireClick} className="w-full mt-2 bg-brand-blue text-brand-dark font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition-all duration-300">
                           Enquire Now
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
