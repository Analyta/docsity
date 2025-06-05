import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BlogPost from './BlogPost';
import { Post, Author, Topic } from '../../types/blog';

interface BlogListProps {
  posts: Post[];
  authors: { [key: string]: Author };
  topics: Topic[];
}

const BlogList: React.FC<BlogListProps> = ({ posts, authors, topics }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTopic = !selectedTopic || post.topic === selectedTopic;
    return matchesSearch && matchesTopic;
  });

  const handleLike = (postId: string) => {
    console.log('Like post:', postId);
  };

  const handleBookmark = (postId: string) => {
    console.log('Bookmark post:', postId);
  };

  const handleComment = (postId: string) => {
    console.log('Comment on post:', postId);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedTopic('')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              !selectedTopic
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Topics
          </button>
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedTopic === topic.name
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {topic.name}
              <span className="ml-2 text-xs">({topic.post_count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <BlogPost
            key={post.id}
            post={post}
            author={authors[post.author_id]}
            onLike={handleLike}
            onBookmark={handleBookmark}
            onComment={handleComment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;