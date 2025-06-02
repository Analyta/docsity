import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Document } from '../../types';
import DocumentCard from '../common/DocumentCard';

interface FeaturedDocumentsProps {
  documents: Document[];
}

const FeaturedDocuments: React.FC<FeaturedDocumentsProps> = ({ documents }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Documents</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium">
            View all <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((document) => (
            <DocumentCard 
              key={document.id} 
              document={document} 
              onClick={() => console.log(`Clicked on document ${document.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDocuments;