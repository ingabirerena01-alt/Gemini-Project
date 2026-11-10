type Option = {
  icon: string;
  name: string;
};

function Option(props: Option) {
  return (
    <>
      <div className="flex flex-col mt-5 ml-2">
        <button className="flex gap-3 ml-4 rounded-4xl hover:bg-[#4b4b4d]">
          <img src={props.icon} className="w-6 mt-1.5 invert"></img>
          <h3 className="text-white text-md mt-2 font-sans ">{props.name}</h3>
        </button>
      </div>
    </>
  );
}
export default Option;
