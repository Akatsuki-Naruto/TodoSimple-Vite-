import { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post";
import { client } from "./api";
import clsx from "clsx";
import { DocumentIcon, GithubIcon, ShareIcon } from "../../assets/svg";

function CallAPI() {
  const show = clsx("show")
  const hide = clsx("hide hidden")
  const buttonProj =  clsx("flex flex-row h-40 bg-primary-7")
  const [Projects, setProjects] = useState([]);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);


  // Functions
  const handleShow = () => {
    setIsActive1((current) => !current);
    setIsActive2((current1) => !current1);
  }

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
      <ul className={clsx("list-none p-0 m-0 ml-10 w-11/12")}>
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
      <ul className={clsx("list-none p-0 grid gap-[15px] relative grid-cols-ul mt-[40px] items-center")}>
        <button className={buttonProj}><DocumentIcon/><GithubIcon/><ShareIcon/></button>
        <button className={buttonProj}><DocumentIcon/><GithubIcon/><ShareIcon/></button>
        <button className={buttonProj}><DocumentIcon/><GithubIcon/><ShareIcon/></button>
        <button className={buttonProj}><DocumentIcon/><GithubIcon/><ShareIcon/></button>
        <button className={buttonProj}><DocumentIcon/><GithubIcon/><ShareIcon/></button>
        <button className={buttonProj}><DocumentIcon/><GithubIcon/><ShareIcon/></button>
        <button className={`${buttonProj} ${isActive2 ? show : hide}`}><DocumentIcon/><GithubIcon/><ShareIcon/></button>
        <button className={`${buttonProj} ${isActive2 ? show : hide}`}><DocumentIcon/><GithubIcon/><ShareIcon/></button>
        
      </ul>
        <button className={clsx(" my-6 border-solid border-[1px] border-white px-2 py-1")} onClick={handleShow}> {isActive1 ? "Show less" : "Show more"}</button>
    </>
  );
}

export default CallAPI;
