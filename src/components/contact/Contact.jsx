const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full  bg-[url('/images/calculator-bg.jpg')] bg-cover bg-center rounded-xl shadow-2xl overflow-hidden">
        <div className="backdrop-blur-sm bg-black/50 p-6 lg:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="hidden lg:block flex-1">
              <img src="/images/calculator-image.png"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="flex-1 flex flex-col gap-6">
              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold text-blue-400">Your Freedom</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mt-2">
                  Get a Financial Plan
                </h1>
              </div>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-white font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-white font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="reason" className="text-white font-semibold">
                    Select Reason
                  </label>
                  <select
                    id="reason"
                    className="w-full p-3 rounded-lg bg-white/10 text-white outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                  >
                    <option value="" disabled className="bg-gray-800">
                      Your Reason
                    </option>
                    <option value="Inter" className="bg-gray-800">
                      Inter
                    </option>
                    <option value="Poppins" className="bg-gray-800">
                      Poppins
                    </option>
                    <option value="Raleway" className="bg-gray-800">
                      Raleway
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full lg:w-1/2 bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;