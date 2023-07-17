import { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";
import { client } from "./api";
import clsx from "clsx";

function CallAPI() {
  const [Projects, setProjects] = useState([]);

  // Functions

  const fetchProjects = async () => {
    const response = await client.get("?_limit=4");
    setProjects(response.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // const getMyBooks = async (id) => {
  //   const response = await apiMyBooks.get(`?_limit=2&id=${id}`);
  //   setInforBooks(Books.filter((Book) => Book.id === (id%2==1)));
  // };


  return (
    <>
      <ul className={clsx("list-none p-0 m-0")}>
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
