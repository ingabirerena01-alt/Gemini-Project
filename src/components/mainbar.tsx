import Left from "./leftop";
import Center from "./center";

function Mainbar() {
  return (
    <>
      <div className="bg-[#131314] bg-[radial-gradient(ellipse_at_center,#042469_0%,#1a1f36_45%,transparent_75%)] min-h-screen w-4/5 flex flex-col">
        <div>
          <Left />
        </div>
        <main className="flex flex-col flex-1 justify-center items-center ">
          <Center />
        </main>
      </div>
    </>
  );
}

export default Mainbar;
