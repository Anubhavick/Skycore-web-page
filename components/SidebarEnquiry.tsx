
import React from 'react';
import EnquiryForm from './EnquiryForm';

interface SidebarEnquiryProps {
    isOpen: boolean;
    onClose: () => void;
}

const SidebarEnquiry: React.FC<SidebarEnquiryProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-brand-dark shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-6 border-b border-gray-100/10">
                        <h2 className="text-2xl font-bold text-white">Start Your Journey</h2>
                        <button onClick={onClose} className="text-gray-400 hover:text-white">
                            <i className="fa-solid fa-xmark h-6 w-6"></i>
                        </button>
                    </div>
                    <div className="p-6 overflow-y-auto flex-grow">
                        <EnquiryForm />
                    </div>
                </div>
            </div>

            {/* Floating button can be added here if needed, but it's handled in Header/pages */}
        </>
    );
};

export default SidebarEnquiry;
