import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counsell from "./image/Counsell.jpg";
import counsel from "./image/counsel.jpg";
import counselling from "./image/counselling.jpg";
import staff from "./image/staff.jpg";
import discuss from "./image/discuss.jpg";
import conference from "./image/conference.jpg";
import health from "./image/health.jpg";
import slider from "./image/slider-3cic.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiMedicalPack,GiLovers, GiBrain } from "react-icons/gi";

import { BiSolidFirstAid } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPlayCircle,
  FaHeadSideVirus,
  FaHeadSideCough,
  FaChild,
  FaPrayingHands,
  FaHandHoldingMedical,
  
  
} from "react-icons/fa";
import { IoIosSearch,IoIosPeople  } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { BsHeartPulse } from "react-icons/bs";
import { PiBrainBold } from "react-icons/pi";
import { GrMoreVertical } from "react-icons/gr";
import { PiWaveSine } from "react-icons/pi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="pb-10">
      <div className="bg-blue-950 text-white h-12 text-center justify-center  py-4 ">
        COVID-19 Resources for Neurology Coaches...Learn More
      </div>

      <div className="  bg-blue-400 h-12 items-center  w-full flex flex-row justify-center  text-white ">
        <div className=" flex items-center gap-3  py-4  text-left     ">
          <BsFillTelephoneFill />
          +1 (202) 588-6500{"  "}
        </div>
        <div className=" flex relative  gap-5 left-44">
          <div className="  text-white py-4  "> Medical insights </div>
          <div className="  text-white py-4 "> | Services </div>
          <div className="  text-white py-4 ">| Careers </div>
        </div>
        <div className=" text-xl flex relative left-60 gap-6">
          <div>
            <FaTwitter />
          </div>
          <div>
            <FaFacebookF />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaLinkedinIn />
          </div>
          <div>
            <IoIosSearch />
          </div>
        </div>
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
          <div className="relative z-10">BOOK APPOINTMENT</div>
          <div className="h-full w-0 bg-red-500 group-hover:w-full transition-all duration-700 ease-in-out delay-75 absolute top-0"></div>
        </div>
      </div>

      <div className="bg-slate-200 w-full h-100  flex gap-52">
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
        <div className="  h-96 w-96 mt-20 ">
          <img
            src={Counsell}
            className="h-full w-full relative right-20 rounded-full object-cover"
          />
        </div>
      </div>

      <div className=" grid grid-cols-3 text-center  h-40 w-11/12 mx-auto absolute left-0 right-0 -bottom-80 ">
        <div className="bg-blue-950 text-white text-2xl font-semibold  text-center flex py-9  ">
          <div className="text-7xl relative left-8">
            <BiSolidFirstAid />
          </div>
          <div className="relative left-14">
            Specialized Therapy &
            <div className="relative right-20 ">Support</div>
            <div className="text-base font-normal  pr-4">
              {" "}
              Nostrud exerctation to ullamco
            </div>
          </div>
        </div>
        <div className=" bg-orange-400 text-center flex text-white text-2xl py-9 font-semibold">
          <div className="text-7xl relative left-6 ">
            <GiBrain />{" "}
          </div>
          <div>
            Diagnosis &<div className="pl-3">Investigation</div>
            <div className="text-base font-normal relative left-11">
              Nostrud exerctation to ullamco
            </div>
          </div>
        </div>

        <div className="text-white text-2xl text-center flex font-semibold py-9  bg-blue-950 ">
          <div className="relative left-12 text-6xl  ">
            <GiMedicalPack />
          </div>
          <div className="relative left-16">
            Medical Treatment &<div className="relative right-16">Surgical</div>
            <div className="text-base font-normal  ">
              Nostrud exerctation to ullamco
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 h-125 pt-40 ">
        <div className="relative w-11/12 mx-auto flex ">
          <div className="">
            <div className="text-orange-400  flex font-medium">
              <div className=""></div>
              <div className="text-xl">
                <GoDotFill />
              </div>
              <div className="text-xl pb-3 ">Providing Since 1984</div>
            </div>

            <div className="text-4xl font-serif font-bold">
              Popular Counselling Services
            </div>
            <div className="pt-6 text-lg">
              Adipisicing elit sed dole there eiusmod tempor incididub labore
              dolore magna
              <div>aliqua denim ads minim veniam quis nostrud.</div>
            </div>
          </div>

          <div className=" relative top-10 left-40 gap-10 flex">
            <div className="py-3 font-bold underline">
              <a href="#"> More Services</a>
            </div>
            <div className=" bg-orange-400 w-60  rounded-xl text-center h-14 pt-5">
              MAKE AN APPOINTMENT
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-4 relative pt-10 mx-14 ">
          <img
            src={slider}
            className="h-72 w-96  relative rounded-xl   object-cover"
          />

          <img
            src={counsel}
            className="h-72 w-96  relative rounded-xl object-cover"
          />

          <img
            src={counselling}
            className="h-72 w-96  relative rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="bg-slate-200 h-150 ">
        <div className="relative top-24 flex left-14">
          <div>
            <div className="text-orange-400 font-bold underline">
              STEPS TOWARDS MENTAL FITNESS
            </div>
            <div className="font-semibold  text-4xl py-4">
              <div className="flex">
                Best In Class
                <div className="font-normal px-2"> Psychiatric </div>
              </div>

              <div className="flex font-normal ">
                Therapy
                <div className="font-semibold px-2"> Conducted</div>
              </div>
            </div>
            <div className="font-semibold text-xl">
              Ut enim adminim veniam, quis nostru exercitation ullamco lorem{" "}
              <br></br>ipsum. Excepteur sint occaecat cupidatat.
            </div>
            <div className="text-xl py-3 text-amber-950">
              Praesentium voluptatum deleniti atque corrupti quos dolores et
              <br></br> quas molestias excepturi sint occaecati cupiditate non
              provident,<br></br> similique sunt in culpa qui officia.
            </div>
            <div className="text-xl py-4 text-amber-950">
              Excepteur sint occaecat cupidatat non proident, suntin culpa qui
              <br></br> offic ia deserunt mollit anim id est laborum.
            </div>

            <div className="flex text-orange-400 relative top-5 font-bold gap-2">
              <div className="text-4xl relative bottom-2">
                <LuClock3 />
              </div>
              Every Week:
              <div className="text-black">
                {" "}
                Monday To Friday: 9:00am to 5:00pm
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-2  relative left-16 gap-5">
            <img
              src={discuss}
              className="h-64 w-60 relative rounded-xl object-cover"
            />

            <img
              src={staff}
              className="h-56 w-60 relative top-7 rounded-xl object-cover"
            />

            <img
              src={conference}
              className="h-56 w-60  relative rounded-xl object-cover"
            />
            <img
              src={health}
              className="h-60 w-60  relative rounded-xl object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-orange-400 h-60 flex gap-28 text-white">
        <div className="flex relative top-12 left-6 gap-6">
          <div className="text-7xl font-bold">
            <BsHeartPulse />
          </div>
          <div>
            <div className="text-5xl font-bold">
              100<sup>+</sup>
            </div>
            <div className="text-2xl font-semibold pt-4">In-House Doctors</div>
            <div className="text-basis"> Most Experienced & Qualified</div>
          </div>
        </div>

        <div className="flex relative top-12 left-6 gap-6">
          {/* <div className="text-xl"><GoDotFill /></div> */}
          {/* <div className="text-xl"><GrMoreVertical /></div> */}
          <div className="text-7xl font-bold">
            <FaHandHoldingMedical />
          </div>
          <div>
            <div className="text-5xl font-bold">
              30<sup>+</sup>
            </div>
            <div className="text-2xl font-semibold pt-4">Medical Branches</div>
            <div className="text-basis"> Available around your near city</div>
            <div></div>
          </div>
        </div>

        <div className="flex relative top-12 left-6 gap-6">
          <div className="text-7xl font-bold">
            <PiBrainBold />
          </div>
          <div>
            <div className="text-5xl font-bold">
              4010<sup>+</sup>
            </div>
            <div className="text-2xl font-semibold pt-4">Success Stories</div>
            <div className="text-basis"> Top level Professional Advices</div>
          </div>
        </div>
      </div>

      <div className="h-97 bg-slate-100">
        <div className=" text-center relative top-24  ">
          <div className="text-5xl font-bold">A Live Therapy Session</div>
          <div className="text-lg py-3 ">
            {/* <PiWaveSine className="text-xl text-red-500" /><PiWaveSine /><PiWaveSine /> */}
            Praising pain was born give you a complete.
          </div>
        </div>
      </div>

      <div className="bg-blue-950 h-160">
        <div className="  relative bottom-96  ">
          <div className="text-8xl flex justify-center relative top-96  text-white z-10 ">
            <FaPlayCircle />
          </div>
          <div className=" text-white bg-orange-400  mx-96 relative z-10 w-80 h-16 py-5 px-12 rounded-r-full rounded-b-full text-xl font-bold">
            WITH DR.PRADHAN
          </div>
          <div className=" flex justify-center  relative bottom-9  ">
            <img
              src="https://cdn.pixabay.com/photo/2023/12/29/03/10/ai-generated-8475432_1280.jpg"
              className="  h-97  w-10/12    "
            />
          </div>
        </div>

        <div className="text-center text-white relative -top-80 ">
          <div className="text-5xl  font-bold">Psychological Treatments</div>
          <div className=" text-xl text-gray-400 py-5">
            Praising pain was born give you a complete.
          </div>
        </div>

         <div className= " flex gap-28 relative bottom-52 mx-24">

          <div className=" flex  flex-col">
            <div className="text-7xl text-center text-orange-400">
              <FaHeadSideVirus />
            </div>
            <div className="text-white text-xl leading-10 font-semibold">
              Troubling Emotions
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-7xl text-orange-400">
              <FaPrayingHands/>
            </div>
            <div className="text-white text-xl leading-10  font-semibold">
              Individual Counselling
            </div> 
           </div>

          <div className="flex flex-col">
            <div className="text-7xl text-orange-400">
              <FaChild />
            </div>
            <div className="text-white text-xl  leading-10  font-semibold">
              Child Counselling
            </div>
          </div> 

           <div className="flex flex-col">
            <div className="text-7xl text-orange-400">
              <FaHeadSideCough />
            </div>
            <div className="text-white text-xl leading-10   font-semibold">
              Personality Disorder
            </div>
          </div> 
          </div>



           <div className="flex relative bottom-28 left-96 gap-40 ">
            <div className="flex flex-col" >
        <div className="text-7xl text-orange-400"><IoIosPeople  /></div>
        <div className="text-white text-xl leading-10 font-semibold">Group Counselling</div>
      </div>  



      <div className="flex flex-col">
        <div className="text-7xl text-orange-400"><GiLovers /></div>
        <div className="text-white text-xl leading-10 font-semibold">Couple Counselling</div>
        </div>
      </div> 
      

      <div className="text-white flex gap-2 justify-center  text-lg font-semibold font-sans">
     <div> Want to search any other treatment? Explore</div>
      <div  className="text-orange-500  flex underline">
       <a href="#">More Treatments</a></div>
       <div> section.</div>
       </div>
       <div className="text-8xl flex justify-center relative top-48 right-11 text-white "><FaPlayCircle /></div>
</div>



<div className="flex flex-row bg-orange-400 ">
{/* <div className="text-8xl  top-16 text-white "><FaPlayCircle /></div> */}
  <div className=" w-full  ">
    <img src="https://tiptonhealth.com/wp-content/uploads/2020/08/Portrait-of-Senior-Woman-and-Her-Mixed-Race-Female-Caregiver-1180634974_6240x4160-1080x675.jpeg" className="h-60 w-11/12"/>

  </div>
  {/* <div className="text-8xl relative right-20 top-16 text-white "><FaPlayCircle /></div> */}

  <div className=" text-white text-xl font-bold py-11 px-14 bg-orange-400 h-60 w-11/12">
    <div >Our Clinic Largest Private Mental Health Partner,</div>
    <div>Carefully Selected Nationwide Team</div>
    <div className="flex relative top-10">
    <div className="text-lg bg-slate-900 rounded-2xl h-16 w-60 py-4 px-12">FIND A DOCTOR</div>
    <div className=" font-semibold px-10 underline py-2 text-lg"><a href="#"></a>CONTACT US NOW</div>
</div>
  </div>






</div>

    </div>
  );
}

export default App;
