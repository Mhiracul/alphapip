import { toast } from "react-toastify";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { apiBaseUrl } from "../config";
import { useNavigate } from "react-router-dom";
import { BiHide, BiShow } from "react-icons/bi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { loginRedux } from "../redux/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setButtonClicked(true);

    const { email, password } = formData;

    if (email && password) {
      try {
        const response = await fetch(`${apiBaseUrl}/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const dataRes = await response.json();
        toast(dataRes.message);

        if (dataRes.alert) {
          localStorage.setItem("token", dataRes.token);
          dispatch(loginRedux(dataRes));

          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        } else {
          if (dataRes.message === "Your account has been suspended") {
            navigate("/error", {
              state: {
                message: "Your account has been suspended.",
              },
            });
          } else {
            toast.error(dataRes.message);
            setFormData({ email: "", password: "" });
          }
        }
      } catch (error) {
        console.error("Failed to login:", error);
        toast.error("Failed to login");
        setFormData({ email: "", password: "" });
      }
    } else {
      alert("Please enter required fields");
    }

    setIsLoading(false);
    setButtonClicked(false);
  };

  return (
    <div>
      <Navbar />
      <div className="flex bg-black flex-col md:flex-row justify-center items-center py-10">
        <div className="md:basis-1/2 self-stretch order-2 md:order-1 md:mb-5">
          <form
            onSubmit={handleSubmit}
            className="form w-full md:w-full px-4 md:px-12 py-8"
            action="/u/signin"
            method="POST"
          >
            <div className="my-6 text-center">
              <h3 className="inline-block font-semibold text-3xl text-slate-50 my-1">
                Sign In
              </h3>
            </div>

            <div className="grid grid-cols-12 gap-3 md:gap-4">
              <div className="col-span-12">
                <input
                  type="email"
                  name="email"
                  id="email-address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email address"
                  className="bg-transparent  border  text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
                />
              </div>
              <div className="col-span-12 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  id="password"
                  onChange={handleChange}
                  required
                  placeholder="Password"
                  className="bg-transparent  border  text-slate-50 font-semibold text-sm px-4 mt-1 focus:ring-rose-300/90 focus:border-rose-300/90 block w-full h-12 md:h-10 shadow-sm border-gray-300 transition duration-300 rounded-full"
                />
                <span
                  className="absolute top-1/2 outline-none right-2 transform -translate-y-1/2 text-gray-500"
                  onClick={handleShowPassword}
                >
                  {" "}
                  {showPassword ? (
                    <BiShow color="#333" />
                  ) : (
                    <BiHide color="#333" />
                  )}
                </span>
              </div>
              <div className="col-span-12">
                <div className="flex items-center justify-between">
                  <div>
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-rose-500 bg-white border-gray-300 rounded focus:ring-rose-500 focus:ring-2"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-1 text-sm font-medium text-gray-200 tracking-tight"
                    >
                      Remember me
                    </label>
                  </div>

                  <p className="text-sm font-medium text-gray-400 my-2 tracking-tight">
                    <a className="text-rose-500" href="/u/forgot">
                      Forgot Password?
                    </a>
                  </p>
                </div>
              </div>

              <div className="col-span-12">
                <button
                  id="submit-btn"
                  type="submit"
                  className="flex justify-between items-center w-full text-black font-semibold py-3 px-8 bg-white text-sm transition-all my-2 rounded-full"
                  disabled={buttonClicked}
                >
                  {isLoading ? (
                    <ClipLoader color="#000" loading={isLoading} size={20} />
                  ) : (
                    <>
                      Sign In
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 ml-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              <div className="col-span-12">
                <p className="text-sm font-medium text-gray-200">
                  Don{"'"}t Have An Account?{" "}
                  <a className="text-rose-500" href="/u/signup">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
