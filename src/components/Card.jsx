import { PlayIcon } from "@heroicons/react/24/solid";
export default function Card({
  img,
  title,
  description,
  url,
  arrowRight,
  arrowLeft,
  slideAnimation,
}) {
  return (
    <div
      className={
        "card rounded-lg w-80 md:w-96 flex flex-col items-center relative " +
        slideAnimation
      }
    >
      <button>{arrowLeft}</button>
      <div className="flex items-center space-x-4 group group-hover:scale-105">
        <a
          href={url}
          className="flex-1 flex justify-center relative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={img}
            alt="Card image"
            className=" h-[500px] lg:h-[500px] lg:w-[500] object-contain rounded mb-4"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <PlayIcon className="h-10 w-10 text-white  group-hover:opacity-90 transition-opacity duration-300 block" />
          </div>{" "}
        </a>
      </div>
      <button>{arrowRight}</button>
      <div className="w-full flex flex-col items-start my-5 ml-8 absolute -bottom-7 -right-10 lg:-right-52 md:-right-20 sm:-right-10 ">
        <h3 className="text-4xl md:text-4xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
