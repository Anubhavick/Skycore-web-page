
import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const image = course.imageUrl || `https://picsum.photos/seed/${course.id}/800/600`;

    return (
        <div className="relative bg-brand-gray/50 rounded-lg overflow-hidden shadow-lg border border-gray-100/10 backdrop-filter backdrop-blur-lg bg-opacity-30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative w-full h-48 overflow-hidden">
                <img className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105" src={image} alt={course.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-brand-light-gray mb-4 text-sm">{course.shortDescription}</p>
                <ul className="space-y-2 mb-6">
                    {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-brand-light-gray text-sm">
                            <i className="fa-solid fa-check-circle text-[#6ED25D] mr-2"></i>
                            {highlight}
                        </li>
                    ))}
                </ul>
                <Link to={`/courses/${course.id}`} className="inline-block w-full text-center bg-[#6ED25D] border border-transparent text-brand-dark font-semibold py-2 px-4 rounded-md hover:opacity-95 transition-colors duration-300">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
