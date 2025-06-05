import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';
import Button from '../common/Button';
import { Topic } from '../../types/blog';

interface CreatePostProps {
  topics: Topic[];
  onCreatePost: (post: { title: string; content: string; topic: string; image?: File }) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ topics, onCreatePost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [topic, setTopic] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content && topic) {
      onCreatePost({
        title,
        content,
        topic,
        image: image || undefined,
      });
      setTitle('');
      setContent('');
      setTopic('');
      setImage(null);
      setImagePreview(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Write your post content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a topic</option>
            {topics.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">
            <div className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer">
              <Image className="w-5 h-5" />
              <span>Add an image</span>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          {imagePreview && (
            <div className="relative mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-48 rounded-lg object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setImage(null);
                  setImagePreview(null);
                }}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <Button
          type="submit"
          disabled={!title || !content || !topic}
          icon={<Send className="w-4 h-4" />}
        >
          Create Post
        </Button>
      </form>
    </div>
  );
};

export default CreatePost;