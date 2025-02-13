const Testimonials = () => {
  return (
    <div>
      <div className="content flex flex-col items-center"> 
            <p className="font-bold text-1xl text-new mt-3">Testimonials</p>
            <p className="text-4xl text-[#212741] mt-3">What They Say</p>
                    
            <div className="carousel rounded-box shadow-shadow-lol overflow-hidden p-[4em] bg-white m-[4em] w-fit h-auto">
                <div className="carousel-item w-full flex-col md:flex-row-reverse">
                 <div className="w-full">
                    <img src="/images/testimonials-01.jpg" class="w-full"/>
                    </div>
                   <div className="flex flex-col gap-5 mt-[4em]">
                    <p className="text-2xl lg:text-3xl">“Donec et nunc massa. Nullam non felis dignissim,
                      dapibus turpis semper, vulputate lorem. Nam volutpat posuere tellus, in porttitor justo interdum nec. Aenean in dapibus risus, in euismod ligula. Aliquam vel scelerisque elit.”</p>
                      <p className="text-2xl lg:text-2xl">David Eigenberg</p>
                      <p className="text-[#43ba7f] font-bold text-2xl">CEO of Mexant</p>
                    </div>
                   
                </div>
                

        </div>
      </div>
    </div>
  )
}

export default Testimonials
