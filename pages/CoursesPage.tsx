
import React from 'react';
import { COURSES } from '../constants';
import CourseCard from '../components/CourseCard';

const CoursesPage: React.FC = () => {
    return (
        <div className="bg-brand-dark">
            {/* Page Header */}
            <div className="bg-brand-gray py-24 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold">Our Training Programs</h1>
                <p className="mt-4 text-lg text-brand-light-gray max-w-3xl mx-auto">
                    From your first flight to the airline cockpit, we offer a complete range of DGCA-approved courses to shape your aviation career.
                </p>
            </div>
            
            {/* Courses Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COURSES.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;
