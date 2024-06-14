import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import Dashboard from "./page/Dashboard";
import WalletComponent from "./page/Wallet";
import SignUp from "./page/SignUp";
import FundWallet from "./page/FundWallet";
import Deposits from "./page/Deposits";
import Notifications from "./page/Notifications";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account/link-wallet" element={<WalletComponent />} />
          <Route path="/u/signup" element={<SignUp />} />
          <Route path="/account/fund-account" element={<FundWallet />} />
          <Route path="/account/deposits" element={<Deposits />} />
          <Route path="/account/notifications" element={<Notifications />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
