import download from "../assets/download.png";
import Gemin from "../assets/gemini.svg";
import chat from "/chat.png";

export default function Left() {
  return (
    <>
      <div className="flex justify-end mt-4 mr-3 gap-4">
        <button className="flex gap-2 rounded-2xl hover:bg-gray-600 px-2">
          <img src={download} className="invert w-7"></img>
          <h3 className="text-white text-xl font-medium">Get App</h3>
        </button>
        <button className="flex gap-2 rounded-2xl bg-blue-600 px-2 hover:bg-blue-300">
          <img src={Gemin} className="w-8"></img>
          <h3 className="text-white text-xl font-medium">Upgrade</h3>
        </button>
        <button className="flex gap-2 rounded-2xl hover:bg-gray-700 px-3 ">
          <img src={chat} className="invert w-7"></img>
        </button>
      </div>
    </>
  );
}
