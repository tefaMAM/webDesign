
const About = () => {
  return (
    <div className="my-[2em] flex flex-col gap-3">
      <div className="up flex flex-col gap-2">
        <p className="text-new text-center font-bold">About us</p>
        <p className=" text-center text-4xl text-black ">Know Us Better </p>
      </div>
      <div className="down flex flex-wrap ">  
            <div className="left w-full md:w-[60%]  px-4">

                <div className="w-full  flex-col md:flex-row  flex justify-between m-[2em] items-center">
                <div className="buttons md:w-1/2 w-full  flex-col md:flex-row  justify-between flex  gap-[2em]">
                    <button className=" btn btn-xl shadow-shadow-lol text-new">Web Design</button>
                    <button className="btn btn-xl shadow-shadow-lol">Graphics</button>
                    <button className="btn btn-xl shadow-shadow-lol">Web Coding</button>
                </div>
                </div>
            <div className="overflow-x-auto flex ">
                <table className="table md:w-[70%] ">
                    <thead>
                    <tr>
                        <th className="font-bold text-black">Project Title</th>
                        <th className="font-bold text-black">Budget</th>
                        <th className="font-bold text-black">Deadline</th>
                        <th className="font-bold text-black">Client</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-new2 text-1xl ">Website Redesign</td>
                        <td>$1,500 to $2,200</td>
                        <td> 2022 Dec 12</td>
                        <td>Web Biz</td>
                    </tr>
                    <tr>
                        <td className="text-new2 text-1xl ">Website Redesign</td>
                        <td>$1,500 to $2,200</td>
                        <td> 2022 Dec 12</td>
                        <td>Web Biz</td>
                    </tr>
                    <tr>
                        <td className="text-new2 text-1xl ">Website Redesign</td>
                        <td>$1,500 to $2,200</td>
                        <td> 2022 Dec 12</td>
                        <td>Web Biz</td>
                    </tr>
                    <tr>
                        <td className="text-new2 text-1xl ">Website Redesign</td>
                        <td>$1,500 to $2,200</td>
                        <td> 2022 Dec 12</td>
                        <td>Web Biz</td>
                    </tr>
                    </tbody>
                </table>
              
                </div>

            </div>
                                
            <div className="right flex flex-col justify-between items-center w-full md:w-[40%] mt-[3em] gap-[2em] md:m-0 md:gap-0">
                <div className="words justify-items-center">
                    <p className="text-3xl w-[60%] text-center font-bold ">Please tell us about your idea and how you want it to be</p>
                </div>
                <div className="words justify-items-center">
                    <p className="text-1xl w-[60%] text-center">
                    You are allowed to use this template for your websites. You are <span className="font-bold"> NOT allowed</span> to redistribute the template ZIP file on any other template websites.
                    </p>
                </div>
                <div className="words justify-items-center">
                    <p className="text-1xl w-[60%] text-center">
                    Thank you for downloading and using our templates. Please tell your friends about our website.                    </p>
                </div>
                
                <button className="btn btn-active border-none bg-new2 text-white w-full md:w-fit  py-3">
                  Discover More
                </button>
            </div>
        </div>  
    </div>
  )
}

export default About
