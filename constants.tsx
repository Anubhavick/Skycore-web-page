
import React from 'react';
import type { Course, Testimonial, Instructor } from './types';

export const COURSES: Course[] = [
    {
        id: 'cpl',
        title: 'Commercial Pilot License (CPL)',
        shortDescription: 'Comprehensive ground and flight training to become a professional commercial pilot.',
        highlights: ['DGCA Syllabus', '200+ Flying Hours', 'Multi-Engine Rating'],
    imageUrl: '/image1.jpg',
        overview: 'Our Commercial Pilot License (CPL) program is the definitive path to a career in aviation. This intensive course covers all DGCA-prescribed subjects, from air navigation to meteorology, and includes over 200 hours of real-world flight training in our modern fleet.',
        details: {
            duration: '12-18 Months',
            format: 'Full-time, In-person',
            prerequisites: '10+2 with Physics & Maths, Class 2 Medical',
        },
        faqs: [
            { question: 'What is the minimum age to start?', answer: 'You must be at least 17 years old to begin training and 18 to get your CPL.' },
            { question: 'Are there any scholarship options?', answer: 'We have partnerships with financial institutions for educational loans. Please contact our admissions office for more details.' },
        ]
    },
    {
        id: 'ppl',
        title: 'Private Pilot License (PPL)',
        shortDescription: 'Master the fundamentals of flight and earn your license to fly recreationally.',
        highlights: ['40+ Flying Hours', 'Solo Flying Experience', 'Flexible Schedule'],
    imageUrl: '/image2.jpg',
        overview: 'The Private Pilot License (PPL) is your first step into the world of aviation. Ideal for enthusiasts, this course provides the skills and knowledge to fly single-engine aircraft safely and confidently for personal transport or recreation.',
        details: {
            duration: '6-8 Months',
            format: 'Part-time / Full-time',
            prerequisites: 'Minimum 16 years old, Class 2 Medical',
        },
        faqs: [
            { question: 'Can I fly internationally with a PPL?', answer: 'A PPL allows you to fly within the country of issuance. For international flights, additional ratings and permissions are required.' },
        ]
    },
    {
        id: 'atpl',
        title: 'Airline Transport Pilot License (ATPL)',
        shortDescription: 'The highest level of pilot certification, preparing you for command in commercial airlines.',
        highlights: ['Advanced Jet Training', 'DGCA Exam Prep', 'Type Rating Prep'],
    imageUrl: '/image3.jpg',
        overview: 'The ATPL is the pinnacle of pilot certification. This program is designed for CPL holders aspiring to become airline captains. It involves extensive theoretical knowledge instruction for all DGCA ATPL papers and preparation for type rating.',
        details: {
            duration: '6 Months (Ground Classes)',
            format: 'Full-time, In-person',
            prerequisites: 'Valid CPL, Class 1 Medical',
        },
        faqs: [
            { question: 'Is flying included in this course?', answer: 'The ATPL course primarily focuses on the theoretical exams. Flying hours for the final license are typically completed with an airline post-hiring.' },
        ]
    },
    {
        id: 'drone',
        title: 'Drone Pilot Training',
        shortDescription: 'Become a certified drone pilot for commercial operations in various industries.',
        highlights: ['DGCA Certified', 'Hands-on Training', 'Industry Applications'],
    imageUrl: '/image4.jpg',
        overview: 'The drone industry is booming. Our certified training program equips you with the skills to operate drones safely and legally for commercial purposes, including cinematography, surveying, and agriculture.',
        details: {
            duration: '2 Weeks',
            format: 'Full-time',
            prerequisites: 'Minimum 18 years old, 10th Pass',
        },
        faqs: [
             { question: 'What kind of jobs can I get?', answer: 'Certified drone pilots are in demand in real estate, media, agriculture, construction, and public safety sectors.' },
        ]
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: 'The instructors are incredibly experienced and supportive. AeroLeap didn’t just teach me to fly; they prepared me for a career.',
        name: 'Rohan Sharma',
        title: 'First Officer, Indigo',
        imageUrl: '/image5.jpg'
    },
    {
        quote: 'From the state-of-the-art simulators to the well-maintained aircraft, the training infrastructure is top-notch.',
        name: 'Priya Verma',
        title: 'CPL Holder',
        imageUrl: '/image5.jpg'
    },
    {
        quote: 'The focused DGCA exam preparation was a game-changer. I cleared all my papers in the first attempt thanks to their guidance.',
        name: 'Ankit Desai',
        title: 'ATPL Student',
        imageUrl: '/image5.jpg'
    }
];

export const INSTRUCTORS: Instructor[] = [
    {
        name: 'Capt. Arjun Singh',
        title: 'Chief Flight Instructor',
        bio: 'With over 15,000 hours of flying experience on Airbus A320 and Boeing 737, Capt. Singh brings a wealth of airline industry knowledge to his instruction.',
    imageUrl: 'https://picsum.photos/seed/arjun/800/600'
    },
    {
        name: 'Sanjana Kapoor',
        title: 'Ground School Head',
        bio: 'An expert in Air Navigation and Meteorology, Sanjana has helped over 500 students clear their DGCA exams with flying colors.',
    imageUrl: 'https://picsum.photos/seed/sanjana/800/600'
    },
    {
        name: 'Vikram Rathore',
        title: 'Multi-Engine Instructor',
        bio: 'Vikram specializes in multi-engine and instrument rating training, ensuring students are proficient in handling complex aircraft in all conditions.',
    imageUrl: 'https://picsum.photos/seed/vikram/800/600'
    }
];

export const ICONS = {
    Certified: () => <i className="fa-solid fa-certificate text-[#6ED25D] text-4xl"></i>,
    Training: () => <i className="fa-solid fa-plane-up text-[#6ED25D] text-4xl"></i>,
    Dgca: () => <i className="fa-solid fa-award text-[#6ED25D] text-4xl"></i>,
};
