export interface Document {
  id: string;
  title: string;
  previewUrl: string;
  university: string;
  subject: string;
  author: string;
  pages: number;
  year: number;
  language: string;
  fileType: string;
  downloads: number;
  rating: number;
  isPremium: boolean;
  isVerified: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  documentCount: number;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  university?: string;
  documentsUploaded: number;
  documentsDownloaded: number;
}