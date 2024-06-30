import { useState, useEffect } from "react";
import axios from "axios";
//import { apiBaseUrl } from "../../../../config";
import { BsTelephoneInbound } from "react-icons/bs";
import { BiLogoBitcoin, BiUserCheck } from "react-icons/bi";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlinePassword,
} from "react-icons/md";
import DefaultLayout from "../../layout/DefaultLayout";
const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    bitcoinAddress: "",
    tetherAddress: "",
    userName: "",
    password: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`/profile`, {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });

        const { data } = response; // Destructure the response data

        setFormData((prevFormData) => ({
          ...prevFormData,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          bitcoinAddress: data.bitcoinAddress,
          tetherAddress: data.tetherAddress,
          userName: data.userName,
        }));
      } catch (error) {
        console.error("Error retrieving profile data:", error);
        // Handle error
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`/profile`, formData, {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });

      console.log(response.data); // Success message
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error
    }
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270 mt-10">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="  bg-[#FFF] rounded-2xl shadow-md shadow-[#989595] dark:border-strokedark dark:bg-boxdark">
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-[#a9a6a6] "
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4">
                          <svg
                            className="fill-fuchsia-500"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                fill=""
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                        <input
                          className="w-full outline-none text-sm rounded mb-2 border border-stroke bg-gray-100 py-3 pl-11 pr-4 text-[#0018A8]"
                          type="text"
                          placeholder="John"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-[#a9a6a6] "
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4">
                          <MdOutlineDriveFileRenameOutline
                            size={20}
                            color="fuchsia"
                          />
                        </span>
                        <input
                          className="w-full text-sm rounded border mb-2  bg-gray-100 py-3 pl-11 pr-4 text-[#0018A8] focus:border-primary focus-visible:outline-none dark:border-strokedark   dark:focus:border-primary"
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Johnson"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-[#a9a6a6] "
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4">
                        <svg
                          className="fill-fuchsia-500"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                              fill=""
                            />
                          </g>
                        </svg>
                      </span>
                      <input
                        className="w-full text-sm mb-2 rounded border border-stroke bg-gray-100 py-3 pl-11 pr-4 text-[#0018A8] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-[#a9a6a6] "
                      htmlFor="emailAddress"
                    >
                      Username
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4">
                        <BiUserCheck size={20} color="fuchsia" />
                      </span>
                      <input
                        className="w-full text-sm mb-2 rounded border border-stroke bg-gray-100 py-3 pl-11 pr-4 text-[#0018A8] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        type="text"
                        placeholder="John"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-[#a9a6a6] "
                      htmlFor="emailAddress"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4">
                        <BsTelephoneInbound color="fuchsia" />
                      </span>
                      <input
                        className="w-full text-sm mb-2 rounded border border-stroke bg-gray-100 py-3 pl-11 pr-4 text-[#0018A8] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        type="number"
                        placeholder="+915********"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-[#a9a6a6] "
                      htmlFor="emailAddress"
                    >
                      Bitcoin Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4">
                        <BiLogoBitcoin size={20} color="fuchsia" />
                      </span>
                      <input
                        className="w-full text-sm mb-2 rounded border border-stroke bg-gray-100 py-3 pl-11 pr-4 text-[#0018A8] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        type="text"
                        placeholder="5****************"
                        name="bitcoinAddress"
                        value={formData.bitcoinAddress}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-[#a9a6a6] "
                      htmlFor="emailAddress"
                    >
                      Tether Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-4">
                        <BiLogoBitcoin size={20} color="fuchsia" />
                      </span>
                      <input
                        className="w-full text-sm mb-2 rounded border border-stroke bg-gray-100 py-3 pl-11 pr-4 text-[#0018A8] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                        type="text"
                        placeholder="5****************"
                        name="tetherAddress"
                        value={formData.tetherAddress}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-5.5">
                      <label
                        className="mb-3 block text-sm font-medium text-[#a9a6a6] "
                        htmlFor="emailAddress"
                      >
                        Password
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-4">
                          <MdOutlinePassword size={20} color="fuchsia" />
                        </span>
                        <input
                          className="w-full text-sm mb-2 rounded border border-stroke bg-gray-100 py-3 pl-11 pr-4 text-[#0018A8] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
                          type="text"
                          placeholder="****************"
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      className="flex bg-fuchsia-500 justify-center rounded border border-stroke py-2 px-6 font-medium text-white hover:shadow-1 dark:border-strokedark "
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex bg-fuchsia-500 justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:shadow-1"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
