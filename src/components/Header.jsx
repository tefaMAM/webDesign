import OnHeader from './OnHeader';

function Header() {
  return (
    <div >
        <div className="carousel w-full  sm:h-[100vh] sm:bg-left-bottom md:h-[100vh] md:bg-center lg:h-[100vh] ">
            <div id="slide1" className="carousel-item relative w-full bg-[url(/public/images/slide-01.jpg)] bg-center
                sm:bg-left">
                    <div className='w-[100%] px-[3em]'>
                     <OnHeader/>
                    </div>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

        <div id="slide2" className="carousel-item relative w-full
        bg-[url(/public/images/slide-02.jpg)] bg-center">
            <div className='w-[100%] px-[3em]'>
                     <OnHeader/>
                    </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full
         bg-[url(/public/images/slide-03.jpg)] bg-center">
            <div className='w-[100%] px-[3em]'>
                     <OnHeader/>
                    </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Header
