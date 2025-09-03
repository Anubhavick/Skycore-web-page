
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="bg-brand-gray p-8 rounded-lg border border-gray-100/10 text-center h-full flex flex-col">
            <i className="fa-solid fa-quote-left text-3xl text-brand-blue mb-4"></i>
            <p className="text-brand-light-gray italic mb-6 flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center justify-center">
                <img className="w-16 h-16 rounded-full mr-4 object-cover" src={testimonial.imageUrl} alt={testimonial.name} />
                <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-brand-blue">{testimonial.title}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
