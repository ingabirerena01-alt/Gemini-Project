import Option from "./options";
import suggestions from "../suggestopt";

export default function Suggestion() {
  return (
    <>
      {suggestions.map((opt) => {
        return <Option {...opt} />;
      })}
    </>
  );
}
