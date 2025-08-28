export default function Contact() {
  return (
    <section className="w-full min-h-screen bg-stone-900 text-white flex flex-col items-center pb-16 pt-20 px-5 md:px-20">
      {/* Heading */}
      <div className="w-full max-w-4xl text-left">
        <h2 className="text-4xl font-bold tracking-wide">Contact Me</h2>
        <div className="border-b-4 border-white w-20  my-4"></div>
        <p className="text-gray-300">
          If you’re interested in my work, have a project, or want to
          collaborate, I’d love to talk.
        </p>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Get in touch</h3>
          <p className="text-gray-300">
            I’d love to hear from you! Whether you’ve got a project in mind,
            want to collaborate, or are interested in my work, feel free to
            reach out.
          </p>
          <ul className="space-y-4">
            <li>
              📧 <span className="ml-2">info@biankahalmai.com</span>
            </li>
            <li>
              📞 <span className="ml-2">+123 456 7890</span>
            </li>
            <li>
              🌐 <span className="ml-2">www.biankahalmai.com</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-stone-900 border border-stone-700 focus:outline-none focus:border-indigo-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-lg bg-stone-900 border border-stone-700 focus:outline-none focus:border-indigo-500"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-stone-900 border border-stone-700 focus:outline-none focus:border-indigo-500"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
