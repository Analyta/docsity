import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Category } from '../../types';
import CategoryCard from '../common/CategoryCard';

interface PopularCategoriesProps {
  categories: Category[];
}

const PopularCategories: React.FC<PopularCategoriesProps> = ({ categories }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Categories</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium">
            View all <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id} 
              category={category} 
              onClick={() => console.log(`Clicked on category ${category.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;