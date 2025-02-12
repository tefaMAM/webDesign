const UnderService = () => {
    return (
      <div>
        <div className="flex w-full h-[50vh]">
          <div 
            className="card bg-[url('/images/calculator-bg.jpg')] bg-cover bg-center h-full p-[2em] md:p-12 flex items-center justify-center">
            
            <div className="word flex flex-col md:flex-row w-full items-center md:items-start justify-between gap-6 ">
              <p className="text-4xl  md:text-5xl lg:text-6xl text-white font-bold leading-tight w-full md:w-[45%] text-center md:text-left">
                Business <span className="text-new2">Solutions</span> and <span className="text-new">Crypto</span> Investments
              </p>
              <div className="btnb flex flex-col w-full md:w-[50%] gap-4 items-center md:items-end">
                <button className="btn btn-active border-none bg-new2 text-white w-full md:w-[60%] py-3">
                  Discover More
                </button>
                <button className="btn btn-active border-none bg-new text-white w-full md:w-[60%] py-3">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UnderService;
  