import { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";

const Chart = () => {
  const [data, setData] = useState([]); // Holds the chart data

  const [options, setOptions] = useState({
    chart: {
      id: "live-btc-chart",
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000,
        },
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      labels: {
        formatter: (value) => `$${value.toFixed(2)}`,
      },
    },
    colors: ["#6B46C1", "#F687B3"], // Set the color of the chart line
    stroke: {
      curve: "smooth", // Change the curve of the line (options: smooth, straight, step)
      width: 2, // Set the line width
    },
    grid: {
      borderColor: "#e0e0e0", // Set the grid lines color
    },
    markers: {
      size: 4, // Set the marker size on the chart data points
      colors: ["#6B46C1", "#F687B3"], // Set the color of the markers
      strokeColors: "#fff", // Set the color of the marker stroke
      strokeWidth: 2, // Set the marker stroke width
    },
    tooltip: {
      enabled: true, // Show tooltip on hover
    },
    dataLabels: {
      enabled: false, // Hide data labels on the chart points
    },
  });

  useEffect(() => {
    // Function to fetch BTC data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
        );
        const btcPrice = response.data.bpi.USD.rate_float;

        // Get the current timestamp
        const currentTime = new Date().getTime();

        // Create a new data point for the chart
        const newDataPoint = {
          x: currentTime,
          y: btcPrice,
        };

        // Update the state with the new data point
        setData((prevData) => [...prevData, newDataPoint]);

        // Example of using setOptions to update the 'options' state
        // For instance, you can add a new property to 'options' here
        setOptions((prevOptions) => ({
          ...prevOptions,
          someNewProperty: "someNewValue",
        }));
      } catch (error) {
        console.error("Error fetching BTC data:", error);
      }
    };

    // Fetch BTC data every 5 seconds (adjust the interval as needed)
    const interval = setInterval(fetchData, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-12 text-black rounded-[19px] h-full  shadow-md shadow-[#ccc9c9] bg-white xl:col-span-8 ">
      <ApexCharts
        options={options}
        series={[{ name: "BTC Price", data: data }]}
        type="line"
        height={400}
      />
    </div>
  );
};

export default Chart;
