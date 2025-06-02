import React from 'react';
import { Download, Star, CheckCircle } from 'lucide-react';
import { Document } from '../../types';
import Button from './Button';

interface DocumentCardProps {
  document: Document;
  onClick?: () => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document, onClick }) => {
  const { 
    title, 
    previewUrl, 
    university, 
    subject, 
    author, 
    pages, 
    downloads, 
    rating, 
    isPremium, 
    isVerified,
    fileType
  } = document;

  return (
    <div 
      className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full"
      onClick={onClick}
    >
      <div className="relative h-40 overflow-hidden">
        <img 
          src={previewUrl} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {isPremium && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
            PREMIUM
          </div>
        )}
      </div>
      
      <div className="flex-1 p-4">
        <div className="flex items-center mb-2">
          <span className="text-xs font-medium px-2 py-0.5 bg-blue-100 text-blue-800 rounded-full">
            {subject}
          </span>
          {isVerified && (
            <span className="ml-2 flex items-center text-green-600" title="Verified Document">
              <CheckCircle size={14} />
            </span>
          )}
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-blue-600">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-2">
          {university} • {pages} pages • {fileType}
        </p>
        
        <p className="text-xs text-gray-500 mb-3">
          By {author}
        </p>
        
        <div className="mt-auto pt-2 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Star size={14} className="text-yellow-400" />
              <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
            
            <div className="flex items-center text-gray-500 text-sm">
              <Download size={14} />
              <span className="ml-1">{downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <Button 
          variant={isPremium ? "secondary" : "primary"} 
          fullWidth 
          size="sm"
          icon={<Download size={16} />}
        >
          {isPremium ? "Get Premium Access" : "Download"}
        </Button>
      </div>
    </div>
  );
};

export default DocumentCard;