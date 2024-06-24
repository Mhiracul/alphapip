import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Dashboard from "./page/Dashboard";
import WalletComponent from "./page/Wallet";
import SignUp from "./page/SignUp";
import FundWallet from "./page/FundWallet";
import Deposits from "./page/Deposits";
import Notifications from "./page/Notifications";
import Profile from "./page/Profile";
import SmartsuppScript from "../SmartsuppScript";
import Withdrawals from "./page/Withdrawals";
//import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import Withdraw from "./page/Withdraw";
import UserProfilePage from "./page/UserProfilePage";
import SuccessPage from "./page/SuccessPage";

function App() {
  return (
    <>
      <Toaster
        position="top-right" // Global position for all toasts
        toastOptions={{
          duration: 5000, // Global duration for all toasts
        }}
      />{" "}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="account/dashboard" element={<Dashboard />} />
          <Route path="/account/link-wallet" element={<WalletComponent />} />
          <Route path="/u/signup" element={<SignUp />} />
          <Route path="/account/fund-account" element={<FundWallet />} />
          <Route path="/account/deposits" element={<Deposits />} />
          <Route path="/account/notifications" element={<Notifications />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/withdrawal" element={<Withdrawals />} />
          <Route path="/account/withdraw" element={<Withdraw />} />
          <Route path="/account/profile/update" element={<UserProfilePage />} />
          <Route path="/account/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
      <SmartsuppScript />
    </>
  );
}

export default App;
