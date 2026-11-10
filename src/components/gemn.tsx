import Gemin from "../assets/gemini.svg";
import Search from "../assets/search.svg";
import Side from "../assets/sidebar.svg";
function Log() {
  return (
    <>
      <div className="flex justify-between">
        <span className="flex gap-3 ml-4">
          <img src={Gemin} className="w-8 mt-1.5"></img>
          <h3 className="text-white text-lg mt-2 font-semibold">Gemini</h3>
        </span>
        <span className="flex gap-3 mt-1 mr-3">
          <img src={Search} className="w-5 invert opacity-50"></img>
          <img src={Side} className="w-5 invert opacity-50"></img>
        </span>
      </div>
    </>
  );
}

export default Log;
