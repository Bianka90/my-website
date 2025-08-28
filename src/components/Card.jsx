// OR for outline version
// import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Card({
  img,
  title,
  description,
  arrowRight,
  arrowLeft,
  slideAnimation,
}) {
  return (
    <div
      className={
        " rounded-lg w-80 md:w-96 flex flex-col items-center relative " +
        slideAnimation
      }
    >
      <div className="flex items-center space-x-4 w-full">
        <button>{arrowLeft}</button>
        <img
          src={img}
          alt="Card image"
          className="w-5/6 h-[500px] lg:h-[600px] lg:w-[750px] object-contain rounded-md mb-4"
        />

        <button>{arrowRight}</button>
      </div>
      <div className="w-full flex items-start my-5 ml-8">
        <h3 className="text-4xl font-semibold text-white absolute bottom-20 left-4">
          {title}
        </h3>
        <p className="text-gray-600 text-left w-full">{description}</p>
      </div>
    </div>
  );
}
