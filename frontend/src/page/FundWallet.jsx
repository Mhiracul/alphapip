import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";

const FundWallet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");

  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const displayWalletAddress = (event) => {
    const { value } = event.target;
    setWalletAddress(value);
  };

  const selectPaymentMethod = (method) => {
    setSelectedMethod(method);
    setWalletAddress(method);
  };
  return (
    <div>
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <Navigation navOpen={navOpen} />{" "}
      <div
        id="alert-2"
        className="flex px-2 py-4 my-4 mb-4 bg-rose-100/30 border border-rose-500"
        role="alert"
      >
        <div className="ml-3 text-sm font-normal text-rose-300">
          This account is yet to be activated for withdrawal
        </div>
      </div>
      {/* Form */}
      <div className="flex flex-col flex-wrap justify-center md:flex-row my-10">
        <form
          className="p-2 overflow-hidden sm:rounded-md basis-2/4"
          action="/account/fund-account"
          encType="multipart/form-data"
          method="POST"
        >
          <div className="flex items-center space-x-2 mx-4">
            <p className="text-gray-900 text-3xl md:text-2xl font-semibold">
              Fund Wallet
            </p>
            {/* SVG Icons */}
          </div>

          <div>
            <div className="px-4 py-5">
              <div className="grid grid-cols-6 gap-3">
                <div className="col-span-12">
                  <label
                    htmlFor="walletAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    name="walletAddress"
                    id="walletAddress"
                    autoComplete="walletAddress"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm py-2 border border-gray-300 rounded-md"
                    value={walletAddress}
                    onChange={displayWalletAddress}
                  />
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="paymentMethod"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    autoComplete="paymentMethod"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={selectedMethod}
                    onChange={(e) => selectPaymentMethod(e.target.value)}
                  >
                    <option value="">Select a payment method</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Bitcoin">Bitcoin</option>
                  </select>
                </div>
                {/* QR Code Container */}
                <div className="col-span-12 md:col-span-6">
                  <div className="h-40 bg-gray-200 rounded-md"></div>
                </div>
                {/* Payment Method Container */}
                <div className="col-span-12 md:col-span-6">
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className={`${
                        selectedMethod === "PayPal"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      } px-4 py-2 rounded-md`}
                      onClick={() => selectPaymentMethod("PayPal")}
                    >
                      PayPal
                    </button>
                    <button
                      type="button"
                      className={`${
                        selectedMethod === "Credit Card"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      } px-4 py-2 rounded-md`}
                      onClick={() => selectPaymentMethod("Credit Card")}
                    >
                      Credit Card
                    </button>
                    <button
                      type="button"
                      className={`${
                        selectedMethod === "Bitcoin"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      } px-4 py-2 rounded-md`}
                      onClick={() => selectPaymentMethod("Bitcoin")}
                    >
                      Bitcoin
                    </button>
                  </div>
                </div>
                {/* Hidden Input Fields */}
                <input type="hidden" name="amount" value="100" />
                <input type="hidden" name="currency" value="USD" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FundWallet;
