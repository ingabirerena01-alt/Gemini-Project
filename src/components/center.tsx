import Plus from "../assets/image (1).png";
import MicroPhone from "../assets/microphone.png";
import Arrow from "../assets/arrow.png";
import Suggestion from "./history";

export default function Center() {
  return (
    <>
      <div>
        <h1 className="text-white text-5xl ml-9"> Where Should I start?</h1>
        <div className="flex rounded-4xl w-2xl py-5 bg-gray-900 mt-8">
          <img className="w-8 h-7 invert-70 ml-5" src={Plus} />
          <input
            placeholder=" Ask Gemini"
            className=" text-amber-50 placeholder-gray-500 font-semibold text-2xl flex-1 outline-none ml-5"
          />
          <div className="flex gap-2">
            <h3 className="text-white text-xl">Gemini</h3>
            <h3 className="text-gray-500 text-xl">Auto</h3>
            <img className="w-5 h-5 mt-2 invert-70" src={Arrow} />
          </div>
          <div>
            <img className="w-8 h-7 invert-70 ml-5" src={MicroPhone} />
          </div>
        </div>
        <Suggestion />
      </div>
    </>
  );
}
