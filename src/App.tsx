import Mainbar from "./components/mainbar";
import Side from "./components/sidebar";

function Page() {
  return (
    <div className="flex w-full min-h-screen ">
      <Side />
      <Mainbar />
    </div>
  );
}

export default Page;
