import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DataFetching() {
  // const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  const handleClick = () => {
    setIdFromBtnClick(id)
  }

  useEffect(() => {
    axios
      // .get("https://jsonplaceholder.typicode.com/posts")
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromBtnClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}> Fetch Post </button>
      <h1>{post.title}</h1>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}
