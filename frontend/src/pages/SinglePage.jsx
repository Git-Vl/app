import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SinglePage = () => {
  const { id } = useParams();
  const[post, setPost] = useState(null);
  const location = "http://localhost:8080" + window.location.pathname;
  console.log(location+`/${id}`);
  useEffect(() => {
    fetch(location)
      .then((response) => {
        // console.log("logggg response: ", response.json());
        return response.json();
      })
      .then((data) => {
        console.log("logggg data: ", data);
        setPost(data);
      })
  }, []);


  return <div>{id}</div>;
};

export { SinglePage };
