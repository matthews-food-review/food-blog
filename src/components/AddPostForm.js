import React, { useState } from 'react';

export default function AddPostForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !author) return;
    addPost({ title: title.trim(), content: content.trim(), author });
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        rows="4"
        placeholder="Share your cooking journey..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <select value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="" disabled hidden>Author</option>
        <option value="Matthew">Matthew</option>
        <option value="Jade">Jade</option>
      </select>
      <button type="submit">Post</button>
    </form>
  );
}