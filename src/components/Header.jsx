import sun from "../assets/sun.png";
import search from "../assets/search.png";

const Header = ({text, setText, clickHandler}) => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center py-6">
          <h1 className="font-['Abril Fatface'] text-white text-4xl">
            devfinder
          </h1>
          <div className="flex gap-4 justify-center items-center" >
            <h3 className="text-white">Light</h3>
            <img className="h-8" src={sun} alt="" />
          </div>
        </div>
        <div className="relative my-4">
          <div className="absolute  top-3 left-4">
            <img className="h-8" src={search} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search Github username"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="bg-darkBlueBg  w-full outline-0 py-4 px-16 rounded-lg text-white"
          />
          <button onClick={clickHandler} className="bg-blue text-white py-3 px-4 absolute rounded-lg  top-1 right-0">
            Search
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
