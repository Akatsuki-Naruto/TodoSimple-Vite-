import clsx from "clsx";
import {GithubIcon } from "../../assets/svg";

export default function Post(Project) {
  return (
    <>
      {Project.id % 2 == 0 ? (
        <div
          className={clsx(
            "listProject py-[100px] grid grid-cols-12 gap-3 items-center relative md:ml-10 m-md:m-0"
          )}
        >
          <img
            className={clsx(
              "flex z-[2] absolute m-md:w-[400px] m-md:h-[200px] opacity-30 hover:opacity-100 md:col-start-2 md:col-end-10 l-md:col-start-3 l-md:col-end-11 m-md:col-start-1 m-md:col-end-12"
            )}
            src={Project.picture}
          />
          <div
            className={clsx(
              "grid relative z-[3] md:col-start-9 md:col-end-12 m-md:col-start-2 m-md:col-end-11 m-md:h-[200px]"
            )}
          >
            <div
              className={clsx(
                "md:text-right md:items-right flex flex-col flex-wrap justify-end md:content-end md:gap-y-7 m-md:text-center m-md:content-center"
              )}
            >
              <div
                className={clsx(
                  "featuredProject text-md mb-3 text-primary-24 font-thin flex md:justify-end m-md:justify-center"
                )}
              >
                Featured Project
              </div>
              <div className={clsx("titleProject font-bold text-lg mb-1")}>
                {Project.title}
              </div>

              <a
                className={clsx("flex md:justify-end m-md:justify-center flex-wrap")}
                href={Project.github}
                title="github icons"
              >
                <GithubIcon />
              </a>

              <div
                className={clsx(
                  "contentProject relative flex mt-10 bg-[#262728] md:w-[200px] text-right italic font-normal m-md:w-[350px]"
                )}
              >
                "{Project.content}"
              </div>
              <ul>
                <li>{Project.language}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={clsx(
            "listProject py-[100px] grid grid-cols-12 gap-3 items-center relative md:ml-10"
          )}
        >
          <button
            className={clsx(
              "z-[3] relative pr-[50px] md:col-start-1 md:col-end-4 m-md:col-start-1 m-md:col-end-12 m-md:pr-1 grid m-md:h-[200px]"
            )}
          >
            <div
              className={clsx(
                "md:text-left md:items-left flex flex-col flex-wrap justify-start md:content-end"
              )}
            >
              <div
                className={clsx(
                  "featuredProject text-md mb-3 text-primary-24 font-thin"
                )}
              >
                Featured Project
              </div>
              <div className={clsx("titleProject font-bold text-lg mb-1")}>
                {Project.title}
              </div>

              <a
                className={clsx("m-md:flex m-md:justify-center")}
                href={Project.github}
                title="github icons"
              >
                <GithubIcon />
              </a>

              <div
                className={clsx(
                  "contentProject relative flex mt-10 bg-[#393c3f] w-[200px] text-right italic font-normal m-md:w-[350px]"
                )}
              >
                "{Project.content}"
              </div>
              <ul>{Project.language}</ul>
            </div>
          </button>
          <img
            className={clsx(
              "flex absolute z-[2]  m-md:w-[400px] m-md:h-[200px] opacity-30 hover:opacity-100 md:col-start-3 md:col-end-11 m-md:col-start-2 m-md:col-end-11"
            )}
            src={Project.picture}
          />
        </div>
      )}     
    </>
  );
}
