import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const location = "http://localhost:8080" + window.location.pathname;
  console.log(location);
  useEffect(() => {
    fetch(location)
      .then((response) => {
        // console.log("logggg response: ", response.json());
        return response.json();
      })
      .then((data) => {
        console.log("logggg data: ", data);
        setPosts(data);
      })
  }, []);
  // useEffect(() => {
  //   fetch('./data.json')
  //     .then(response => response.json())
  //     .then(data => setPosts(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div>
      {posts ? (
        <ul>
          {posts.map(post => (
            <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.name}</li>
            </Link>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export { Posts };
