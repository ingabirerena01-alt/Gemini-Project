import Log from "./gemn";
import Option from "./options";
function Side() {
  return (
    <>
      <div className="bg-[#1e1e1e] w-1/5 flex flex-col">
        <Log />
        <Option />
        <h3 className="text-gray-400 ml-5 mt-6 mb-2.5">Notebooks</h3>
      </div>
    </>
  );
}

export default Side;
