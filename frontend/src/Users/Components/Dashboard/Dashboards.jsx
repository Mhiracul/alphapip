import DefaultLayout from "../../../layout/DefaultLayout";
import CardFour from "./Cards/CardFour";
import CardOne from "./Cards/CardOne";
import CardThree from "./Cards/CardThree";
import CardTwo from "./Cards/CardTwo";
import Chart from "./Chart";
import Footer from "./Footer";
import Dthree from "../Dashboard/Dthree";
//import Sidebar from "./Sidebar";

const Dashboards = () => {
  return (
    <div className="w-full font-roboto h-screen">
      <DefaultLayout>
        <div className="grid grid-cols-1 gap-4 rounded-md md:grid-cols-2 mt-7 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4  md:mt-6 md:gap-6 2xl:mt-[1.875rem] 2xl:gap-[1.875rem]">
          <Chart />
          <Dthree />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </DefaultLayout>
    </div>
  );
};

export default Dashboards;
