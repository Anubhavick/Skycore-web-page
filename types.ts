
export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  highlights: string[];
  imageUrl: string;
  overview: string;
  details: {
    duration: string;
    format: string;
    prerequisites: string;
  };
  faqs: { question: string; answer: string; }[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  imageUrl: string;
}

export interface Instructor {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
}
