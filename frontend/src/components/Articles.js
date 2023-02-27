import { useState, useEffect } from 'react';
import { getPosts } from '../lib/api';

const Article = ({ post }) => {
  const { attributes } = post;
  return <article>
    <h2>{ attributes.title }</h2>
    <p>{ attributes.content }</p>
  </article>;
}

export default function Articles() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const __gePosts = async () => {
      const { data, meta } = await getPosts();
      setPosts(data);
      setLoading(false);
    }

    __gePosts();
  }, []);

  if(loading) return 'loading...';

  return <div>
    {
      posts.map(post => <Article key={post.id} post={post} />)
    }
  </div>
}