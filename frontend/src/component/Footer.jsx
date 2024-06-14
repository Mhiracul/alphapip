import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="pt-10 pb-5 px-5 md:px-10 grid md:grid-cols-12 items-start gap-6 md:gap-9 bg-rose-700">
      <div className="col-span-12 md:col-span-6">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl text-white font-bold tracking-normal">
              Stay in touch
            </h1>
            <p className="text-slate-200">
              Announcements can be gotten via mail. Press contact:
              <a className="" href="mailto:support@globalquantnetwork.com">
                support@alphapipnetwork.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-12 md:col-span-6">
        <div className="flex flex-col space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl text-white font-bold tracking-normal">
              Subscribe to our newsletter
            </h1>

            <p className="text-slate-200">
              New coins supported, blog updates and exclusive offers directly in
              your inbox
            </p>
          </div>

          <form action="">
            <div className="grid grid-cols-12 gap-3 md:gap-2">
              <div className="col-span-12 md:col-span-6">
                <input
                  type="email"
                  name="email"
                  id="email-address"
                  placeholder="Email Address"
                  required
                  className="bg-transparent text-slate-50 font-normal text-sm  focus:ring-rose-300/90 focus:border-rose-300/90 block w-full py-3 md:py-4 px-4 shadow-sm border-gray-300 border transition duration-300 rounded-full placeholder:text-gray-300"
                />
              </div>
              <div className="col-span-12 md:col-span-6">
                <button
                  id="submit-btn"
                  type="submit"
                  className="flex justify-between items-center w-full text-white font-semibold py-4 px-6 bg-black text-sm transition-all rounded-full"
                >
                  Subscribe to newsletter
                  <FaArrowRightLong color="#FFF" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="col-span-12 text-center text-sm text-white">
        <p>Alphapip Network Network © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
