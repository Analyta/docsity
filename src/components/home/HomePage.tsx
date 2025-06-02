import React from 'react';
import Hero from './Hero';
import FeaturedDocuments from './FeaturedDocuments';
import PopularCategories from './PopularCategories';
import Testimonial from './Testimonial';
import CTA from './CTA';
import { featuredDocuments, popularCategories } from '../../data/mockData';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <FeaturedDocuments documents={featuredDocuments} />
      <PopularCategories categories={popularCategories} />
      <Testimonial />
      <CTA />
    </main>
  );
};

export default HomePage;