export const Hero = () => {
  return (
    <div className="h-screen w-full bg-teal-500 text-black flex justify-center items-center">
      <div className="w-[60vw] h-[60vh] bg-white flex">
        <div className="flex-1 h-full bg-black">
          <h1 className="text-6xl text-white">ANAKIN SKYWALKER.</h1>
        </div>
        <div className="flex-1 h-full bg-orange-500 flex justify-end flex-col gap-2">
          <h1 className="text-6xl text-black">WEB DEVELOPER.</h1>
        </div>
      </div>
    </div>
  );
};
