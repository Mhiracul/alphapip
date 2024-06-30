import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-black h-full w-full">
      <div className="flex md:flex-row flex-col gap-3 w-full items-center  ">
        <div className="px-10 py-6 md:w-1/2 w-full  flex flex-col gap-3 ">
          <h1 className="md:text-7xl text-5xl tracking-tighter font-bold text-white">
            Alphapip Network
          </h1>
          <h2 className="text-white font-bold text-xl ">
            INCREDIBLY <span className="text-rose-600">SECURE</span>
          </h2>
          <p className="text-base font-light text-[#CBD5E1]">
            An online hardware wallet provides a secure way to backup and store
            digital assets and funds, especially in preparation for a global
            event or potential blackout in the near future.
          </p>

          <div className="flex gap-6">
            <Link to={"/u/signup"}>
              <button className="bg-white  inline-flex gap-3 items-center text-black text-sm px-6 py-4 font-bold rounded-full">
                Backup Now
                <FaArrowRightLong color="#000" />
              </button>
            </Link>
            <Link to={"/signin"}>
              <h3 className="text-white underline underline-offset-6 text-sm font-medium inline-flex gap-2 items-center">
                Sign In <FaArrowRightLong size={10} />
              </h3>
            </Link>
          </div>
        </div>
        <img src="/ledger.png" alt="" className="md:w-1/2 w-full " />
      </div>
      <div className="lg:container lg:mx-auto py-20  lg:px-20 px-0">
        <div className="flex md:flex-row flex-col gap-3 items-center">
          <div className="flex flex-col gap-3 md:w-1/2 px-10 w-full">
            <h1 className="text-3xl text-white font-bold">
              Industry-leading fund security
            </h1>
            <p className="text-sm font-light text-[#CBD5E1] ">
              Alphapip Network is supported by a Funds Retrieving Agent (FRA),
              ensuring that individuals can withdraw their money following a
              bank reset. To safeguard funds and retirement savings, users can
              invest in iso assets like XLM, XRP, and other assets.
            </p>
            <Link to={"/signin"}>
              <button className="bg-white w-40 inline-flex gap-3 items-center text-black text-sm px-6 py-4 font-bold rounded-full">
                Learn More
                <FaArrowRightLong color="#000" />
              </button>
            </Link>
          </div>
          <img src="/secure.png" alt="" className="md:w-1/2 w-full" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
