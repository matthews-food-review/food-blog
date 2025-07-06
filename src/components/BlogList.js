import React from 'react';
import BlogPost from './BlogPost';

export default function BlogList({ posts }) {
  return (
    <div className="article-list">
      {posts.map(post => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  );
}