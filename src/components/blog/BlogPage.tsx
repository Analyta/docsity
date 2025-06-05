import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';
import CreatePost from './CreatePost';
import { Post, Author, Topic } from '../../types/blog';

const mockAuthors: { [key: string]: Author } = {
  '1': {
    id: '1',
    username: 'Sarah Johnson',
    avatar_url: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg'
  },
  '2': {
    id: '2',
    username: 'Michael Chen',
    avatar_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  }
};

const mockTopics: Topic[] = [
  { id: '1', name: 'Technology', post_count: 156 },
  { id: '2', name: 'Education', post_count: 89 },
  { id: '3', name: 'Science', post_count: 124 },
  { id: '4', name: 'Career', post_count: 67 }
];

const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    content: 'React and TypeScript are powerful tools for building modern web applications...',
    topic: 'Technology',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    author_id: '1',
    likes_count: 42,
    comments_count: 12,
    is_bookmarked: false
  },
  {
    id: '2',
    title: 'Best Practices for Online Learning',
    content: 'Online learning has become increasingly important in today\'s educational landscape...',
    topic: 'Education',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    author_id: '2',
    likes_count: 28,
    comments_count: 8,
    is_bookmarked: true
  }
];

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Here we would fetch posts from Supabase
    // For now using mock data
  }, []);

  const handleCreatePost = async (postData: { 
    title: string; 
    content: string; 
    topic: string; 
    image?: File 
  }) => {
    // Here we would send the post to Supabase
    // For now, just add it to the local state
    const newPost: Post = {
      id: String(Date.now()),
      title: postData.title,
      content: postData.content,
      topic: postData.topic,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      author_id: '1', // Using mock author
      likes_count: 0,
      comments_count: 0,
      is_bookmarked: false
    };

    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog Forum</h1>
          <p className="mt-2 text-gray-600">Join the discussion and share your knowledge</p>
        </div>

        <CreatePost topics={mockTopics} onCreatePost={handleCreatePost} />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <BlogList
            posts={posts}
            authors={mockAuthors}
            topics={mockTopics}
          />
        )}
      </div>
    </div>
  );
};

export default BlogPage;