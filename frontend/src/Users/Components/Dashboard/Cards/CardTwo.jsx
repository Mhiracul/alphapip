import { SiWebmoney } from "react-icons/si";
const CardTwo = () => {
  return (
    <div>
      <div className="relative flex flex-col min-w-0 break-words bg-white shadow-md shadow-[#ccc9c9] rounded-2xl bg-clip-border">
        <div className="flex-auto p-4">
          <div className="flex flex-row -mx-3">
            <div className="flex-none w-2/3 max-w-full px-3">
              <div>
                <p className="mb-0 font-sans font-semibold leading-normal text-sm">
                  Deposits
                </p>
                <h5 className="mb-0 font-bold">
                  $53,000
                  <span className="leading-normal text-sm font-weight-bolder text-lime-500">
                    +55%
                  </span>
                </h5>
              </div>
            </div>
            <div className="px-3 text-right basis-1/3">
              <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500">
                <i className="ni leading-none ni-money-coins text-lg relative top-3.5 text-white">
                  {" "}
                  <SiWebmoney size={20} />{" "}
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
