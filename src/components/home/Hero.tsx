import React from 'react';
import { BookOpen, FileText, Users, ArrowRight } from 'lucide-react';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const Hero: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real app, we would navigate to search results
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '20px 20px' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Access the Knowledge You Need to Succeed
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Join millions of students worldwide sharing and accessing quality study materials
          </p>

          <div className="mb-10 max-w-xl mx-auto">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search for documents, notes, essays..."
              className="bg-white rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg">
              Join Free
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700">
              How It Works
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">15M+ Documents</h3>
              <p className="text-blue-100">Access a vast library of study materials</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">500+ Subjects</h3>
              <p className="text-blue-100">From every academic discipline</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25M+ Students</h3>
              <p className="text-blue-100">Join our global learning community</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1440,58.7L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;