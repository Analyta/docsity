import { Document, Category, User } from '../types';
import { BookText, Code, FlaskRound as Flask, Scale, Brain, Calculator, Building } from 'lucide-react';

export const featuredDocuments: Document[] = [
  {
    id: '1',
    title: 'Introduction to Organic Chemistry - Lecture Notes',
    previewUrl: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    university: 'Harvard University',
    subject: 'Chemistry',
    author: 'Dr. Sarah Johnson',
    pages: 45,
    year: 2023,
    language: 'English',
    fileType: 'PDF',
    downloads: 1253,
    rating: 4.7,
    isPremium: false,
    isVerified: true
  },
  {
    id: '2',
    title: 'Calculus II - Complete Course Summary',
    previewUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    university: 'MIT',
    subject: 'Mathematics',
    author: 'Prof. James Wilson',
    pages: 78,
    year: 2022,
    language: 'English',
    fileType: 'PDF',
    downloads: 3489,
    rating: 4.9,
    isPremium: true,
    isVerified: true
  },
  {
    id: '3',
    title: 'Modern European History - Exam Preparation',
    previewUrl: 'https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    university: 'Oxford University',
    subject: 'History',
    author: 'Dr. Emily Lawrence',
    pages: 62,
    year: 2023,
    language: 'English',
    fileType: 'PDF',
    downloads: 982,
    rating: 4.5,
    isPremium: false,
    isVerified: true
  },
  {
    id: '4',
    title: 'Introduction to Machine Learning - Course Notes',
    previewUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    university: 'Stanford University',
    subject: 'Computer Science',
    author: 'Prof. Michael Chen',
    pages: 103,
    year: 2023,
    language: 'English',
    fileType: 'PDF',
    downloads: 4215,
    rating: 4.8,
    isPremium: true,
    isVerified: true
  },
  {
    id: '5',
    title: 'Principles of Microeconomics - Study Guide',
    previewUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    university: 'London School of Economics',
    subject: 'Economics',
    author: 'Dr. Robert Taylor',
    pages: 56,
    year: 2022,
    language: 'English',
    fileType: 'PDF',
    downloads: 1876,
    rating: 4.6,
    isPremium: false,
    isVerified: true
  },
  {
    id: '6',
    title: 'Human Anatomy and Physiology - Illustrated Notes',
    previewUrl: 'https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    university: 'Johns Hopkins University',
    subject: 'Biology',
    author: 'Prof. Amanda Martinez',
    pages: 89,
    year: 2023,
    language: 'English',
    fileType: 'PDF',
    downloads: 2654,
    rating: 4.9,
    isPremium: true,
    isVerified: true
  }
];

export const popularCategories: Category[] = [
  {
    id: '1',
    name: 'Business & Economics',
    icon: 'Building',
    documentCount: 15243
  },
  {
    id: '2',
    name: 'Engineering',
    icon: 'Calculator',
    documentCount: 12854
  },
  {
    id: '3',
    name: 'Medicine & Health',
    icon: 'Flask',
    documentCount: 10976
  },
  {
    id: '4',
    name: 'Law',
    icon: 'Scale',
    documentCount: 8734
  },
  {
    id: '5',
    name: 'Computer Science',
    icon: 'Code',
    documentCount: 14532
  },
  {
    id: '6',
    name: 'Humanities',
    icon: 'BookText',
    documentCount: 9876
  },
  {
    id: '7',
    name: 'Psychology',
    icon: 'Brain',
    documentCount: 7654
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  university: 'University of California',
  documentsUploaded: 12,
  documentsDownloaded: 48
};