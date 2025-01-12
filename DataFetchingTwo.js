import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingTwo() {
  const [post, setPost] = useState([]);
  const [id, setID] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        // console.log("kittu");
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);
  const handleClick = () => setIdFromButtonClick(id);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setID(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetchingTwo;
