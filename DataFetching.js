import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [post, setPost] = useState([]);
  const [id, setID] = useState(1);

  //   const [posts, setPosts] = useState([]);
  useEffect(() => {
    // axios
    // .get("https://jsonplaceholder.typicode.com/posts")
    // .then((res) => {
    //   console.log(res);
    //   // console.log("kittu");
    //   setPost(res.data);
    // })
    // .catch((err) => console.log(err));
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        // console.log("kittu");
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
