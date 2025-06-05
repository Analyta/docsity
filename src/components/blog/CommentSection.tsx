import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Comment } from '../../types/blog';

interface CommentSectionProps {
  comments: Comment[];
  onAddComment: (content: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments,
  onAddComment,
}) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Comments</h3>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <img
                src={comment.author.avatar_url}
                alt={comment.author.username}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="ml-2">
                <span className="font-medium text-gray-900">
                  {comment.author.username}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {formatDistanceToNow(new Date(comment.created_at), {
                    addSuffix: true,
                  })}
                </span>
              </div>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;