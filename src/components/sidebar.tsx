import Log from "./gemn";
import Option from "./options";
import options from "../optiondata";
function Side() {
  const OptionsElements = options.map((opt) => {
    return <Option {...opt} />;
  });
  return (
    <>
      <div className="bg-[#1e1e1e] w-1/5 flex flex-col">
        <Log />
        {OptionsElements}
        <h3 className="text-gray-400 ml-5 mt-6 mb-2.5">Notebooks</h3>
      </div>
    </>
  );
}

export default Side;
