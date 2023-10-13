import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
  <div className=" relative background w-full h-screen overflow-x-hidden flex  flex-col items-center">
   
    <h1 className=" text-center w-11/12 h-12 mt-[40px] 
    text-4xl font-bold bg-white rounded-md">RANDOM GIFS</h1>
    <div className="flex flex-col w-full items-center gap-y-10 mt-[30px] ">
      <Random/>
      <Tag/>
    </div>
    
  </div>
  );
}
