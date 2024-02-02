import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const location = "http://localhost:8080" + window.location.pathname;
  console.log(location);
  useEffect(() => {
    fetch(location)
      .then((response) => {
        console.log("logggg response: ", response);
        return response.text();
      })
      .then((data) => {
        console.log("logggg data: ", data);
        setMessage(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [window.location.pathname]);

  return (
    <div>
      <h1>{message} from JAVA + the other part of this string from React</h1>
    </div>
  );
}

export default App;
