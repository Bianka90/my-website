import biankaTeaching from "./assets/bianka_teaching.jpg";

export default function Lessons() {
  return (
    <section
      id="lessons"
      className="w-screen md:h-screen bg-stone-900 text-white overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex flex-col justify-center items-start p-10">
          <h3 className="text-5xl font-semibold ">Lessons</h3>
          <p className="text-sm text-gray-400 mt-1 pb-5">
            Join our community of learners today!
          </p>
          <p>
            I offer violin lessons tailored to each student’s goals and level,
            whether you’re just starting out or looking to refine your
            technique. You can book private one-on-one lessons for a more
            personalized experience, or join me at the{" "}
            <span className="font-semibold">Talent Academy</span>, where I also
            teach as part of their music program. My focus is on helping
            students build strong fundamentals, develop confidence, and discover
            the joy of playing the violin.
          </p>
          <div className="mt-6 flex justify-center items-center gap-4">
            <div>
              <button className="bg-white text-black py-1 px-3 rounded">
                Contact
              </button>
            </div>
            <div className="">
              <button className="bg-white text-black py-1 px-3 rounded">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center overflow-hidden">
          <img
            src={biankaTeaching}
            alt=""
            className="w-full max-w-md h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
