
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SidebarEnquiry from './components/SidebarEnquiry';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

    return (
        <HashRouter>
            <div className="relative min-h-screen bg-brand-dark">
                <Header onEnquireClick={() => setIsEnquiryOpen(true)} />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage onEnquireClick={() => setIsEnquiryOpen(true)} />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/courses/:id" element={<CourseDetailPage onEnquireClick={() => setIsEnquiryOpen(true)}/>} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
                <SidebarEnquiry isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
            </div>
        </HashRouter>
    );
};

export default App;
