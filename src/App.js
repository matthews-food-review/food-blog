import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from './firebase';
import Header from './components/Header';
import AddPostForm from './components/AddPostForm';
import BlogList from './components/BlogList';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(items);
    };
    fetchPosts();
  }, []);

  const addPost = async (post) => {
    const docRef = await addDoc(collection(db, 'posts'), {
      ...post,
      createdAt: serverTimestamp()
    });
    setPosts([{ id: docRef.id, ...post, createdAt: new Date() }, ...posts]);
  };

  return (
    <div className="app-container">
      <Header title="Matthew and Jade's Summer in London food review!!!!" />
      <AddPostForm addPost={addPost} />
      <BlogList posts={posts} />
    </div>
  );
}

export default App;