import "./Loader.css";
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shadow-md">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Loader;
