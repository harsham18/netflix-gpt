const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-12 absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-4xl  text-white">{title}</h1>
      <p className="py-6 text-sm w-1/3  text-white">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg rounded-sm p-2 mx-2 px-8 hover:bg-opacity-80">
          ▶Play
        </button>
        <button className="bg-gray-500 text-white text-lg rounded-sm p-2 px-8">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
