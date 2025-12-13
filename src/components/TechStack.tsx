import { SiHtml5 } from "react-icons/si";

function TechStack() {
  return (
    <>
      <div className="w-full mt-10">
        <div className="flex flex-row items-start max-w-3xl mx-auto px-4 space-x-4">
          <figure className="border-2 rounded-lg shadow-md w-24 h-24 flex flex-col items-center justify-center">
            <SiHtml5 size={35} className="mb-2" />
            <figcaption>HTML5</figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

export default TechStack;
