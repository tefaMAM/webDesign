import UnderService from './UnderService';

const Service = () => {
    return (
      <div className="bg-gray-50 py-12 flex flex-col gap-[4em]">
        <div className="service px-4 sm:px-8 lg:px-12 flex flex-wrap justify-center gap-6">

          <div className="card w-full sm:w-[45%] lg:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">CSS Templates</h2>
              <p className="text-gray-600">TemplateMo website is the best for you to explore and download free website templates.</p>
            </div>
          </div>
  
          <div className="card w-full sm:w-[45%] lg:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">HTML5 Web Pages</h2>
              <p className="text-gray-600">Templates are based on Bootstrap 5 CSS framework. You can easily adapt or modify based on your needs.</p>
            </div>
          </div>
  
          <div className="card w-full sm:w-[45%] lg:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">Responsive Designs</h2>
              <p className="text-gray-600">All of our CSS templates are 100% free to use for commercial or business websites.</p>
            </div>
          </div>
  
          <div className="card w-full sm:w-[45%] lg:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">Mobile and Tablet ready!</h2>
              <p className="text-gray-600">Our HTML CSS templates are well-tested on mobile, tablet, and desktop compatibility.</p>
            </div>
          </div>
  
          <div className="card w-full sm:w-[45%] lg:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">Fast Customer Support</h2>
              <p className="text-gray-600">Do not be hesitated to contact us if you have any question or concern about our templates.</p>
            </div>
          </div>
  
          <div className="card w-full sm:w-[45%] lg:w-[30%] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            <div className="card-body p-6">
              <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">Fully Customizable</h2>
              <p className="text-gray-600">If you have any idea or suggestion about new templates, feel free to let us know.</p>
            </div>
          </div>
        </div>
        <UnderService/>
      </div>
    );
  };
  
  export default Service;