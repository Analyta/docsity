import React from 'react';
import { Upload, Download, Users } from 'lucide-react';
import Button from '../common/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join Our Global Learning Community Today
          </h2>
          <p className="text-blue-100 mb-8">
            Access millions of study resources, share your knowledge, and connect with students worldwide.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Join Free
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-700"
            >
              Upload Documents
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <Upload className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Share Knowledge</h3>
              <p className="text-blue-100">Upload your study materials and help others</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Access Resources</h3>
              <p className="text-blue-100">Download study materials for your courses</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-3 rounded-full mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-blue-100">Join a community of passionate learners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;