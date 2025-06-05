export interface Post {
  id: string;
  title: string;
  content: string;
  topic: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  likes_count: number;
  comments_count: number;
  is_bookmarked: boolean;
}

export interface Comment {
  id: string;
  post_id: string;
  content: string;
  created_at: string;
  author_id: string;
  author: Author;
}

export interface Author {
  id: string;
  username: string;
  avatar_url: string;
}

export interface Topic {
  id: string;
  name: string;
  post_count: number;
}