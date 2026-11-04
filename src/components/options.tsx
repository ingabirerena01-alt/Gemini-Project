import Menuic from "../assets/menu.svg";
import Student from "../assets/student.png";
import CLock from "../assets/clock.png";
import Image from "../assets/image.png";
import Library from "../assets/librar.png";
import Chat from "../assets/chat.png";
function Option() {
  return (
    <>
      <div className="flex flex-col mt-5 ml-2">
        <button className="flex gap-3 ml-4 rounded-4xl hover:bg-[#4b4b4d]">
          <img src={Chat} className="w-6 mt-1.5 invert"></img>
          <h3 className="text-white text-md mt-2 font-sans ">New chat</h3>
        </button>
        <button className="flex gap-3 ml-4 rounded-4xl hover:bg-[#4b4b4d]">
          <img src={Library} className="w-6 mt-1.5 invert"></img>
          <h3 className="text-white text-md mt-2 ">Library</h3>
        </button>
        <button className="flex gap-3 ml-4 rounded-4xl hover:bg-[#4b4b4d]">
          <img src={Image} className="w-6 mt-1.5 invert"></img>
          <h3 className="text-white text-md mt-2 ">Images</h3>
        </button>
        <button className="flex gap-3 ml-4 rounded-4xl hover:bg-[#4b4b4d]">
          <img src={CLock} className="w-6 mt-1.5 invert"></img>
          <h3 className="text-white text-md mt-2 ">Scheduled</h3>
        </button>
        <button className="flex gap-3 ml-4 rounded-4xl hover:bg-[#4b4b4d]">
          <img src={Student} className="w-6 mt-1.5 invert"></img>
          <h3 className="text-white text-md mt-2 ">Students</h3>
        </button>
        <button className="flex gap-3 ml-4 rounded-4xl hover:bg-[#4b4b4d]">
          <img src={Menuic} className="w-5 mt-1.5 invert"></img>
          <h3 className="text-white text-md mt-2 ">More</h3>
        </button>
      </div>
    </>
  );
}
export default Option;
