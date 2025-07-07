import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export default function BlogPost({ post }) {
  const timeAgo = post.createdAt?.toDate
    ? formatDistanceToNow(post.createdAt.toDate(), { addSuffix: true })
    : formatDistanceToNow(post.createdAt, { addSuffix: true });

  return (
    <div className="article-card">
      <h2>{post.title}</h2>
      <small>{timeAgo}</small>
      <p>{post.content}</p>
      <span className="author">— {post.author}</span>
    </div>
  );
}