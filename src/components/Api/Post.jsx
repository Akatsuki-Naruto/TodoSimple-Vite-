import clsx from "clsx";
import { GithubIcon } from "../../assets/svg";

export default function Post(Project) {
  const rightContent = clsx(
    "text-right z-[3] flex flex-col items-right flex-wrap content-start"
  );
  const leftContent = clsx(
    "text-left z-[3] flex flex-col content-end items-left flex-wrap content-end"
  );
  const rightImg = clsx(
    "flex items-right z-[2] relative flex w-[400px] h-[200px] bg-primary-4"
  );
  const leftImg = clsx(
    "flex items-left z-[2] relative flex w-[400px] h-[200px] bg-primary-4"
  );
  const rightIcon = clsx(
    "grid grid-col-12 "
  )
  const leftIcon = clsx(
    ""
  )

  return (
    <>
      <div
        className={clsx(
          "listProject py-[100px] grid grid-cols-12 items-center relative ml-10 w-11/12"
        )}
      >
        <div className={Project.id % 2 == 0 ? leftImg : rightImg}>
          <img
            className={clsx("flex relative w-[400px] h-[200px] bg-primary-4 ")}
            src={Project.picture}
          />
        </div>
        <div className={Project.id % 2 == 0 ? rightContent : leftContent}>
          <div
            className={clsx(
              "featuredProject text-md mb-3 text-primary-24 font-thin"
            )}
          >
            Featured Project
          </div>
          <div className={clsx("titleProject font-bold text-lg mb-1")}>
            {Project.title}
          </div >

          <a className={Project.id % 2 == 0 ? rightIcon : leftIcon} href={Project.github} title="github icons">
            <GithubIcon/>
          </a>

          <div className="contentProject">"{Project.content}"</div>
          <ul>{Project.language}</ul>
        </div>
      </div>
    </>
  );
}
