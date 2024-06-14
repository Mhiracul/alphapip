import { PiDeviceRotate } from "react-icons/pi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { HiBellSnooze } from "react-icons/hi2";

const SecureNetwork = () => {
  return (
    <div className="w-full h-full bg-slate-100">
      <div className="py-10 px-5 md:px-10">
        <div className="flex flex-col items-center  gap-3">
          <h1 className="text-4xl tracking-tighter text-black font-bold">
            Secure Networks{" "}
          </h1>
          <p className="text-base  text-center max-w-6xl font-light text-slate-800">
            After the great bank reset, all the money saved in the fchain
            network can be withdrawn, making it a safer option than Central
            banks. However, it is essential to keep in mind that Central banks,
            retirement savings, and stock markets will experience crashes during
            this period.
          </p>
        </div>
        <div className="grid grid-cols-12 pt-4 container mx-auto gap-8  md:px-0 px-2">
          {" "}
          <div className="bg-white col-span-12 md:col-span-4 space-y-2 px-4 py-10 border border-gray-500 shadow-lg">
            <div className="text-center flex flex-col h-full justify-center items-center">
              <PiDeviceRotate size={25} />
              <h1 className="font-semibold text-2xl">High Reliability</h1>{" "}
              <p className="text-center font-normal text-base tracking-normal text-slate-700">
                We have earned the trust of a vast number of individuals. Our
                continuous dedication to enhancing our security measures
                demonstrates our commitment to minimizing potential risks.
              </p>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 space-y-2 px-4 py-10 border border-gray-500 shadow-lg">
            <div className="text-center flex flex-col h-full justify-center items-center">
              <AiFillSafetyCertificate size={25} />
              <h1 className="font-semibold text-2xl">Safe and Secure</h1>{" "}
              <p className="text-center font-normal text-base tracking-normal text-slate-700">
                Our company conducts absolutely legal activities in the legal
                field. We are certified to operate investment business. We are
                legal and safe.
              </p>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 space-y-2 px-4 py-10 border border-gray-500 shadow-lg">
            <div className="text-center flex flex-col h-full justify-center items-center">
              <HiBellSnooze size={25} />
              <h1 className="font-semibold text-2xl">Priority Service</h1>{" "}
              <p className="text-center font-normal text-base tracking-normal text-slate-700">
                We provide 24/7 customer support through email and telegram. Our
                support representative are periodically available to help you
                through any difficulty.
              </p>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 space-y-2 px-4 py-10 border border-gray-500 shadow-lg">
            <div className="text-center flex flex-col h-full justify-center items-center">
              <FaUsers size={25} />
              <h1 className="font-semibold text-2xl">Dedicated Team</h1>{" "}
              <p className="text-center font-normal text-base tracking-normal text-slate-700">
                We have many years of experience working on stock exchanges and
                in the sphere of cryptocurrency mining – you can completely
                entrust your investments to us.
              </p>
            </div>
          </div>
          <div className="bg-white col-span-12 md:col-span-4 space-y-2 px-4 py-10 border border-gray-500 shadow-lg">
            <div className="text-center flex flex-col h-full justify-center items-center">
              <PiDeviceRotate size={25} />
              <h1 className="font-semibold text-2xl">
                0% Transaction Fee
              </h1>{" "}
              <p className="text-center font-normal text-base tracking-normal text-slate-700">
                Your funds can be instantly withdrawn 24 hours, 7 days a week in
                order to keep you in control if your finances
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureNetwork;
