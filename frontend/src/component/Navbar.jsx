import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" h-full  w-full bg-black">
      <div className="flex justify-between items-center">
        <div className="px-10 container mx-auto">
          <h1 className="text-base text-medium text-white">Alphapip Network</h1>
        </div>
        <div className="inline-flex gap-3 text-center  bg-rose-600 py-6 justify-center items-center w-60 ">
          <Link to={"/signin"}>
            <button className="    text-white text-sm font-medium">
              Sign In
            </button>{" "}
          </Link>
          <FaArrowRightLong color="#FFF" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
