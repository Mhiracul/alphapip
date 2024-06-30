import PropTypes from "prop-types";

const balances = [
  { name: "Eth balance", image: "/eth.svg", width: "w-6", balance: 0 },
  { name: "Bitcoin balance", image: "/bitcoin.svg", width: "w-10", balance: 0 },
  { name: "XRP balance", image: "/xrp.svg", width: "w-6", balance: 0 },
  { name: "XLM balance", image: "/xlm.svg", width: "w-6", balance: 0 },
  { name: "XDC balance", image: "/xdc.jpeg", width: "w-6", balance: 0 },
  { name: "ALGO balance", image: "/algo.jpeg", width: "w-6", balance: 0 },
  { name: "MIOTA balance", image: "/miota.jpeg", width: "w-6", balance: 0 },
  { name: "ADA balance", image: "/ada.jpeg", width: "w-6", balance: 0 },
  { name: "HBAR balance", image: "/hbar.jpeg", width: "w-6", balance: 0 },
  { name: "QTUM balance", image: "/qtum.jpeg", width: "w-6", balance: 0 },
];

const BalanceSection = ({ name, image, width, balance }) => (
  <section className="basis-1/3 font-grotesque border-2 border-black self-stretch md:self-start items-center rounded-xl m-4 py-10 px-6">
    <div className="flex justify-between items-center">
      <div className="flex flex-col self-start">
        <p className="text-black-100 text-3xl md:text-2xl font-bold">
          {balance}
        </p>
        <p className="text-gray-900 text-base md:text-base font-semibold">
          {name}
        </p>
      </div>
      <div>
        <img className={width} src={image} alt={name} />
      </div>
    </div>
  </section>
);

BalanceSection.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
};

const Balances = () => (
  <div className="flex flex-col flex-wrap md:flex-row">
    {balances.map((balance, index) => (
      <BalanceSection key={index} {...balance} />
    ))}
  </div>
);

export default Balances;
