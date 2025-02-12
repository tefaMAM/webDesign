function OnHeader() {
    return (
      <div>
        <div className="content p-[1em] sm:p-[2em] sm:pl-[4em] flex flex-col gap-1">
          <div className="up flex justify-between w-[100%] items-center flex-wrap">
            <div className="right w-full sm:w-[40%] text-center sm:text-left">
              <img src="webApp/public/images/logo.png" className="w-[150px] sm:w-auto" />
            </div>
  
            <div className="left text-white w-full sm:w-[60%] flex flex-col sm:flex-row justify-around items-center mt-4 sm:mt-0 gap-4 sm:gap-0">
              <a href="http://" className="text-new hover:text-new">Home</a>
              <a href="http://" className="hover:text-new">About</a>
  
              <details className="dropdown hover:text-new">
                <summary className="hover:text-new">Pages</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 text-black">
                  <li><a className="hover:text-new">Item 1</a></li>
                  <li><a className="hover:text-new">Item 2</a></li>
                </ul>
              </details>
  
              <a href="http://" className="hover:text-new">Testimonials</a>
  
              <button className="btn bg-[#43ba7f] text-white border-none w-full sm:w-auto mt-4 sm:mt-0">
                Contact Support
              </button>
            </div>
          </div>
  
          <div className="middle w-full sm:w-[100%] md:w-[60%] lg:w-[60%] flex flex-col gap-[2em] mt-8 sm:mt-0 animate-slide-in-left">
            <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Get <span className="text-new">ready</span> for your business &
              upgrade <span className="text-new">all aspects</span>
            </p>
  
            <div className="bg-white p-[0.1em] w-[20%] rounded-box"></div>
  
            <div>
              <p className="text-white w-full sm:w-[50%] text-sm sm:text-base">
                Mexant HTML5 Template is provided for free of charge. This layout is based on Bootstrap 5 CSS framework. Anyone can download and edit for any professional website. Thank you for visiting TemplateMo website.
              </p>
            </div>
  
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-active border-none bg-new2 text-white w-full sm:w-[20%]">
                Discover More
              </button>
              <button className="btn btn-active border-none bg-new text-white w-full sm:w-[20%]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default OnHeader;