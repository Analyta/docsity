import React from 'react';
import { Building, Calculator, FlaskRound as Flask, Scale, Code, BookText, Brain } from 'lucide-react';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const { name, icon, documentCount } = category;

  const getIcon = () => {
    switch (icon) {
      case 'Building':
        return <Building className="w-6 h-6" />;
      case 'Calculator':
        return <Calculator className="w-6 h-6" />;
      case 'Flask':
        return <Flask className="w-6 h-6" />;
      case 'Scale':
        return <Scale className="w-6 h-6" />;
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'BookText':
        return <BookText className="w-6 h-6" />;
      case 'Brain':
        return <Brain className="w-6 h-6" />;
      default:
        return <BookText className="w-6 h-6" />;
    }
  };

  return (
    <div 
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
        {getIcon()}
      </div>
      <h3 className="font-medium text-gray-900 text-center mb-1">{name}</h3>
      <p className="text-sm text-gray-500">{documentCount.toLocaleString()} documents</p>
    </div>
  );
};

export default CategoryCard;