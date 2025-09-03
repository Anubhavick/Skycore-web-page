
import React from 'react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="bg-brand-gray/50 rounded-lg overflow-hidden shadow-lg border border-gray-100/10 backdrop-filter backdrop-blur-lg bg-opacity-30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-brand-blue/20">
            <img className="w-full h-48 object-cover" src={course.imageUrl} alt={course.title} />
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-brand-light-gray mb-4 text-sm">{course.shortDescription}</p>
                <ul className="space-y-2 mb-6">
                    {course.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-brand-light-gray text-sm">
                            <i className="fa-solid fa-check-circle text-brand-blue mr-2"></i>
                            {highlight}
                        </li>
                    ))}
                </ul>
                <Link to={`/courses/${course.id}`} className="inline-block w-full text-center bg-brand-dark border border-brand-blue text-brand-blue font-semibold py-2 px-4 rounded-md hover:bg-brand-blue hover:text-brand-dark transition-colors duration-300">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
