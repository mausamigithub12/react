import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counsell from "./image/Counsell.jpg"
import { BsFillTelephoneFill } from "react-icons/bs";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="pb-10">
      <div className="bg-blue-950 text-white h-12 text-center justify-center  py-4 ">
        COVID-19 Resources for Neurology Coaches...Learn More
      </div>

      <div className="  bg-blue-400 h-12  w-full flex flex-row justify-end px-10 text-white ">
        <div className=" flex items-center gap-3  py-4  text-left     ">
          <BsFillTelephoneFill  />
          +1 (202) 588-6500{"  "}
        </div>
        <div className="  text-white py-4 pl-64 "> Medical insights |</div>
        <div className="  text-white py-4 pl-4"> Services | </div>
        <div className="  text-white py-4 pl-4"> Careers </div>
      </div>

      <div className="text-black text-l font-semibold bg-white my-0 flex h-24 text-center justify-end py-8 px-10  gap-12  ">
        <div className="outline-none rounded-none">
          <select className="outline-none w-24">
            <option value="home">Home</option>
            <option value="home">Home-Psychology</option>
            <option value="home">Home-life coach</option>
            <option value="home">Home-Counselling</option>
          </select>
        </div>
        <div className="">
          <select>
            <option value="Services">Services</option>
            <option value="Services1">Services-style1</option>
            <option value="Services2">Services-style2</option>
            <option value="Services3">Services-style3</option>Services
          </select>
        </div>
        <div className="">Doctors</div>
        <div className="">Pages</div>
        <div className="">About Us</div>
        <div className="bg-blue-950 relative text-white h-14 cursor-pointer group overflow-clip   py-4 -my-3 justify-center w-60 rounded-xl">
          <div className="relative z-10">
          BOOK APPOINTMENT

          </div>
          <div className="h-full w-0 bg-red-500 group-hover:w-full transition-all duration-700 ease-in-out delay-75 absolute top-0"></div>
        </div>
      </div>

      <div className="bg-slate-100 w-full h-full pb-10 flex gap-52">
        <div className=" pt-36 pl-20">
          <div className="text-xl ">Medinova Hospital in California</div>
          <div className=" text-4xl font-bold pt-12">
            Professional Mental <br></br>Health Advisors.
          </div>
          <div className="text-xl pt-5">
            {" "}
            We are Providing Best Mental Health Services at Affordable Prices.
          </div>
          <div className=" bg-orange-400 w-60 mt-8 rounded-xl text-center h-14 pt-5">
            MAKE AN APPOINTMENT
          </div>
        </div>
        <div className=" h-72 w-80 rounded-full bg-pink-500 mt-20">
          {" "}
          <img src={Counsell} className="h-full w-full rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default App;
