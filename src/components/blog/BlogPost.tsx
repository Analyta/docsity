import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageCircle, Bookmark, Share2 } from 'lucide-react';
import { Post, Author } from '../../types/blog';

interface BlogPostProps {
  post: Post;
  author: Author;
  onLike: (postId: string) => void;
  onBookmark: (postId: string) => void;
  onComment: (postId: string) => void;
}

const BlogPost: React.FC<BlogPostProps> = ({
  post,
  author,
  onLike,
  onBookmark,
  onComment,
}) => {
  return (
    <article className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex items-center mb-4">
        <img
          src={author.avatar_url}
          alt={author.username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-3">
          <h3 className="font-medium text-gray-900">{author.username}</h3>
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.content}</p>

      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex space-x-6">
          <button
            onClick={() => onLike(post.id)}
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Heart
              className={`w-5 h-5 mr-1 ${
                post.likes_count > 0 ? 'fill-current text-red-500' : ''
              }`}
            />
            <span>{post.likes_count}</span>
          </button>

          <button
            onClick={() => onComment(post.id)}
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5 mr-1" />
            <span>{post.comments_count}</span>
          </button>

          <button
            onClick={() => onBookmark(post.id)}
            className="flex items-center hover:text-blue-600 transition-colors"
          >
            <Bookmark
              className={`w-5 h-5 mr-1 ${
                post.is_bookmarked ? 'fill-current text-blue-600' : ''
              }`}
            />
          </button>

          <button className="flex items-center hover:text-blue-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
          {post.topic}
        </span>
      </div>
    </article>
  );
};

export default BlogPost;