import { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";

function CallAPI() {
  const [Projects, setProjects] = useState([]);

  // Functions
  const client = axios.create({
    baseURL:
      "https://my-json-server.typicode.com/Akatsuki-Naruto/db-TodoSimple/Project",
  });

  const fetchProjects = async () => {
    const response = await client.get("?_limit=4");
    setProjects(response.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <ul>
        {Projects.map((Project) => (
          <Post
            key={Project.id}
            id={Project.id}
            title={Project.title}
            github={Project.github}
            picture={Project.picture}
            content={Project.content}
            languages={Project.languages}
          />
        ))}
      </ul>
    </>
  );
}

export default CallAPI;
