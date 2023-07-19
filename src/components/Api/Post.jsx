import clsx from "clsx";
import { GithubIcon } from "../../assets/svg";

export default function Post(Project) {
  return (
    <>
      {Project.id % 2 == 0 ? (
        <div
          className={clsx(
            "listProject py-[100px] grid grid-cols-12 gap-3 items-center relative md:ml-10"
          )}
        >
          <div
            className={clsx(
              "flex items-left z-[2] relative md:w-[600px] md:h-[300px] m-md:w-[400px] m-md:h-[200px]  bg-primary-4 md:col-start-2"
            )}
          >
            <img
              className={clsx("flex relative md:w-[600px] md:h-[300px] m-md:w-[400px] m-md:h-[200px] opacity-50 hover:opacity-100")}
              src={Project.picture}
            />
          </div>
          <div className={clsx("grid relative z-[3] md:col-end-12 m-md:col-start-2 m-md:w-[600px] m-md:h-[300px]")}>
            <div
              className={clsx(
                "text-right items-right flex flex-col flex-wrap justify-end content-end md:gap-y-7 "
              )}
            >
              <div
                className={clsx(
                  "featuredProject text-md mb-3 text-primary-24 font-thin flex justify-end"
                )}
              >
                Featured Project
              </div>
              <div className={clsx("titleProject font-bold text-lg mb-1")}>
                {Project.title}
              </div>

              <a
                className={clsx("flex justify-end flex-wrap")}
                href={Project.github}
                title="github icons"
              >
                <GithubIcon />
              </a>

              <div className={clsx("contentProject relative flex mt-10 bg-[#262728] md:w-[200px] text-right italic font-normal")}>"{Project.content}"</div>
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
          <div
            className={clsx(
              "z-[3] relative pr-[50px] md:col-end-2 m-md:col-end-2 m-md:pr-1 grid m-md:w-[600px] m-md:h-[300px]"
            )}
          >
            <div
              className={clsx(
                "text-left items-left flex flex-col flex-wrap justify-start content-end"
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
                className={clsx("")}
                href={Project.github}
                title="github icons"
              >
                <GithubIcon />
              </a>

              <div className={clsx("contentProject relative flex mt-10 bg-[#262728] w-[200px] text-right italic font-normal")}>"{Project.content}"</div>
              <ul>{Project.language}</ul>
            </div>
          </div>
          <div
            className={clsx(
              "grid z-[2] relative md:w-[600px] md:h-[300px] m-md:w-[400px] m-md:h-[200px] bg-primary-4 md:col-start-3 m-md:col-start-4"
            )}
          >
            <img
              className={clsx("flex relative md:w-[600px] md:h-[300px] m-md:w-[400px] m-md:h-[200px] opacity-50 hover:opacity-100")}
              src={Project.picture}
            />
          </div>
        </div>
      )}
    </>
  );
}