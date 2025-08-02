export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-12">
      <div className="max-w-2xl w-full">
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-gray-300 text-center mb-10">
          We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <form className="bg-gray-800 shadow-lg rounded-lg p-6 space-y-5">
          <div>
            <label className="block text-sm mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-2 px-4 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
