import { useState } from "react";
import Header from "../dashboard-component/Header";
import Navigation from "../dashboard-component/Navigation";

function WalletComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState({
    name: "",
    imgSrc: "",
  });

  const [navOpen, setNavOpen] = useState(false);

  const popupConnectTab = (target) => {
    const walletName = target.getAttribute("data-walletname");
    const imgSrc = target.getAttribute("data-imgsrc");
    setSelectedWallet({ name: walletName, imgSrc: imgSrc });
    setIsModalOpen(true);
  };

  const closeWalletConnectContainer = () => {
    setIsModalOpen(false);
  };

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div>
      <Header toggleNav={toggleNav} navOpen={navOpen} />
      <Navigation navOpen={navOpen} />{" "}
      <div className="relative flex flex-col flex-wrap justify-center my-10 mx-8">
        <div className="w-full md:w-2/4 md:mx-auto">
          <div className="flex justify-center items-center space-x-2 mx-auto">
            <p className="text-gray-900 text-3xl md:text-2xl font-semibold">
              Wallets
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </div>
          <p className="font-medium">
            Multiple iOS and Android wallets support the protocol. Simply scan a
            QR code from your desktop computer screen to start securely using a
            dApp with your mobile wallet. Interaction between mobile apps and
            mobile browsers are supported via mobile deep linking.
          </p>
        </div>
      </div>
      <div
        id="wallet-container"
        className="w-full md:w-2/4 my-10 mx-auto grid grid-cols-12 gap-6"
      >
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Metamask"
          data-imgsrc="/metamask.svg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/metamask.svg" alt="" />
            <p className="font-medium mt-2 text-base">Metamask</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Trust"
          data-imgsrc="/twt.svg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/twt.svg" alt="" />
            <p className="font-medium mt-2 text-base">Trust</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Crypto"
          data-imgsrc="/crypto.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/crypto.png" alt="" />
            <p className="font-medium mt-2 text-base">Crypto</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Argent"
          data-imgsrc="/argent.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/argent.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Argent</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Rainbow"
          data-imgsrc="/rainbow.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/rainbow.png" alt="" />
            <p className="font-medium mt-2 text-base">Rainbow</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Gnosis"
          data-imgsrc="/gnosis.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/gnosis.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Gnosis</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Atomic"
          data-imgsrc="/atomic.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/atomic.png" alt="" />
            <p className="font-medium mt-2 text-base">Atomic</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Exodus"
          data-imgsrc="/exodus.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/exodus.png" alt="" />
            <p className="font-medium mt-2 text-base">Exodus</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Coinbase"
          data-imgsrc="/coinbase.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/coinbase.png" alt="" />
            <p className="font-medium mt-2 text-base">Coinbase</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Aktionariat"
          data-imgsrc="/aktionariat.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/aktionariat.png" alt="" />
            <p className="font-medium mt-2 text-base">Aktionariat</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Binance"
          data-imgsrc="/binance.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/binance.png" alt="" />
            <p className="font-medium mt-2 text-base">Binance</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Blockchain"
          data-imgsrc="/blockchain.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/blockchain.png" alt="" />
            <p className="font-medium mt-2 text-base">Blockchain</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Keyringpro"
          data-imgsrc="/keyringpro.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/keyringpro.png" alt="" />
            <p className="font-medium mt-2 text-base">Keyringpro</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Ellipal"
          data-imgsrc="/ellipal.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/ellipal.png" alt="" />
            <p className="font-medium mt-2 text-base">Ellipal</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Midaswallet"
          data-imgsrc="/midaswallet.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/midaswallet.png" alt="" />
            <p className="font-medium mt-2 text-base">Midaswallet</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Morixwallet"
          data-imgsrc="/morixwallet.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/morixwallet.png" alt="" />
            <p className="font-medium mt-2 text-base">Morixwallet</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Atwallet"
          data-imgsrc="/atwallet.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/atwallet.png" alt="" />
            <p className="font-medium mt-2 text-base">Atwallet</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Dokwallet"
          data-imgsrc="/dokwallet.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/dokwallet.png" alt="" />
            <p className="font-medium mt-2 text-base">Dokwallet</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Meetone"
          data-imgsrc="/meetone.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/meetone.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Meetone</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Unstoppable"
          data-imgsrc="/unstoppable.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/unstoppable.png" alt="" />
            <p className="font-medium mt-2 text-base">Unstoppable</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Xdc"
          data-imgsrc="/xdc.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/xdc.png" alt="" />
            <p className="font-medium mt-2 text-base">Xdc</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Fetch"
          data-imgsrc="/fetch.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/fetch.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Fetch</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Iconex"
          data-imgsrc="/iconex.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/iconex.png" alt="" />
            <p className="font-medium mt-2 text-base">Iconex</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Harmony"
          data-imgsrc="/harmony.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/harmony.png" alt="" />
            <p className="font-medium mt-2 text-base">Harmony</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Keplr"
          data-imgsrc="/keplr.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/keplr.png" alt="" />
            <p className="font-medium mt-2 text-base">keplr</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Kardiachain"
          data-imgsrc="/kardiachain.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/kardiachain.png" alt="" />
            <p className="font-medium mt-2 text-base">Kardiachain</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Graph Protocol"
          data-imgsrc="/graphprotocol.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/graphprotocol.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Graph Protocol</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Cosmostation"
          data-imgsrc="/cosmostation.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/cosmostation.png" alt="" />
            <p className="font-medium mt-2 text-base">Cosmostation</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Peakdefi"
          data-imgsrc="/peakdefi.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/peakdefi.png" alt="" />
            <p className="font-medium mt-2 text-base">Peakdefi</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Swft"
          data-imgsrc="/swft.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/swft.png" alt="" />
            <p className="font-medium mt-2 text-base">Swft</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Vision"
          data-imgsrc="/vision.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/vision.png" alt="" />
            <p className="font-medium mt-2 text-base">Vision</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Bitkeep"
          data-imgsrc="/bitkeep.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/bitkeep.png" alt="" />
            <p className="font-medium mt-2 text-base">Bitkeep</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Viawallet"
          data-imgsrc="/viawallet.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/viawallet.png" alt="" />
            <p className="font-medium mt-2 text-base">Viawallet</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Sparkpoint"
          data-imgsrc="/sparkpoint.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/sparkpoint.png" alt="" />
            <p className="font-medium mt-2 text-base">Sparkpoint</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Easypocket"
          data-imgsrc="/easypocket.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/easypocket.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Easypocket</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Bridgewallet"
          data-imgsrc="/bridgewallet.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/bridgewallet.png" alt="" />
            <p className="font-medium mt-2 text-base">Bridgewallet</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Ownbit"
          data-imgsrc="/ownbit.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/ownbit.png" alt="" />
            <p className="font-medium mt-2 text-base">Ownbit</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Infinity"
          data-imgsrc="/infinity.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/infinity.png" alt="" />
            <p className="font-medium mt-2 text-base">Infinity</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Walletio"
          data-imgsrc="/walletio.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/walletio.png" alt="" />
            <p className="font-medium mt-2 text-base">Walletio</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Infinito"
          data-imgsrc="/infinito.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/infinito.png" alt="" />
            <p className="font-medium mt-2 text-base">Infinito</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Equal"
          data-imgsrc="/equal.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/equal.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Equal</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Safepal"
          data-imgsrc="/safepal.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/safepal.png" alt="" />
            <p className="font-medium mt-2 text-base">Safepal</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Spatium"
          data-imgsrc="/spatium.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/spatium.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Spatium</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Torus"
          data-imgsrc="/torus.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/torus.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Torus</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Wazirx"
          data-imgsrc="/wazirx.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/wazirx.png" alt="" />
            <p className="font-medium mt-2 text-base">Wazirx</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Tokenary"
          data-imgsrc="/tokenary.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/tokenary.png" alt="" />
            <p className="font-medium mt-2 text-base">Tokenary</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Cybavo"
          data-imgsrc="/cybavo.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/cybavo.png" alt="" />
            <p className="font-medium mt-2 text-base">Cybavo</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Grid Plus"
          data-imgsrc="/gridplus.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/gridplus.png" alt="" />
            <p className="font-medium mt-2 text-base">Grid Plus</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Coinomi"
          data-imgsrc="/coinomi.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/coinomi.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Coinomi</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Nash"
          data-imgsrc="/nash.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/nash.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Nash</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Zelcore"
          data-imgsrc="/zelcore.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/zelcore.png" alt="" />
            <p className="font-medium mt-2 text-base">Zelcore</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Dcent"
          data-imgsrc="/dcent.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/dcent.png" alt="" />
            <p className="font-medium mt-2 text-base">Dcent</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Alpha Wallet"
          data-imgsrc="/alphawallet.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/alphawallet.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Alpha Wallet</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Alice"
          data-imgsrc="/alice.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/alice.png" alt="" />
            <p className="font-medium mt-2 text-base">Alice</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Cool Wallet"
          data-imgsrc="/coolwallet.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/coolwallet.png" alt="" />
            <p className="font-medium mt-2 text-base">Cool Wallet</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Coin98"
          data-imgsrc="/coin98.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/coin98.png" alt="" />
            <p className="font-medium mt-2 text-base">Coin98</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Trust Vault"
          data-imgsrc="/trustvault.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/trustvault.png" alt="" />
            <p className="font-medium mt-2 text-base">Trust Vault</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Loopring"
          data-imgsrc="/loopring.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/loopring.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Loopring</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Mykey"
          data-imgsrc="/mykey.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/mykey.png" alt="" />
            <p className="font-medium mt-2 text-base">Mykey</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Eidoo"
          data-imgsrc="/eidoo.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/eidoo.png" alt="" />
            <p className="font-medium mt-2 text-base">Eidoo</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Huobi"
          data-imgsrc="/huobi.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/huobi.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Huobi</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Authereum"
          data-imgsrc="/authereum.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/authereum.png" alt="" />
            <p className="font-medium mt-2 text-base">Authereum</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Walleth"
          data-imgsrc="/walleth.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/walleth.png" alt="" />
            <p className="font-medium mt-2 text-base">Walleth</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Ledger"
          data-imgsrc="/ledger.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/ledger.png" alt="" />
            <p className="font-medium mt-2 text-base">Ledger</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Maiar"
          data-imgsrc="/maiar.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/maiar.png" alt="" />
            <p className="font-medium mt-2 text-base">Maiar</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Bitpay"
          data-imgsrc="/bitpay.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/bitpay.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Bitpay</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Math"
          data-imgsrc="/math.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/math.png" alt="" />
            <p className="font-medium mt-2 text-base">Math</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Tokenpocket"
          data-imgsrc="/tokenpocket.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/tokenpocket.png" alt="" />
            <p className="font-medium mt-2 text-base">Tokenpocket</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Onto"
          data-imgsrc="/onto.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/onto.png" alt="" />
            <p className="font-medium mt-2 text-base">Onto</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Anchor"
          data-imgsrc="/anchor.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/anchor.png" alt="" />
            <p className="font-medium mt-2 text-base">Anchor</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Pillar"
          data-imgsrc="/pillar.png"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/pillar.png" alt="" />
            <p className="font-medium mt-2 text-base">Pillar</p>
          </div>
        </div>
        <div
          onClick={(e) => popupConnectTab(e.target)}
          data-walletname="Wallet Connect"
          data-imgsrc="/walletconnect.jpeg"
          className="wallet col-span-4 md:col-span-4 p-4 cursor-pointer bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center">
            <img className="w-1/2" src="/walletconnect.jpeg" alt="" />
            <p className="font-medium mt-2 text-base">Wallet Connect</p>
          </div>
        </div>
        {isModalOpen && (
          <div
            id="wallet-connect-container"
            className="backdrop-blur-sm bg-gray-100/60 w-full h-full absolute top-0 left-0 transition-all py-10 px-2"
          >
            <div
              id="wallet-connect-form"
              className="absolute rounded-xl bg-white p-4 space-y-4 w-full md:w-2/4 lg:w-2/5 shadow-md"
            >
              <div className="flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={closeWalletConnectContainer}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="flex items-center justify-start space-x-4 border border-gray-300 rounded-lg p-4">
                <p>Connecting...</p>
                <button
                  onClick={() => {}}
                  id="connect-wallet-button"
                  className="rounded-full bg-gray-900 text-white hover:text-blue-300 font-semibold py-1 px-4 transition-all"
                >
                  Connect manually
                </button>
              </div>
              <div
                id="wallet"
                className="flex items-center justify-between border border-blue-500 rounded-lg p-4 cursor-pointer"
              >
                <div className="basis-1/2">
                  <p id="wallet-connect-name" className="text-lg font-semibold">
                    {selectedWallet.name}
                  </p>
                  <p>Easy to use browser extension</p>
                </div>
                <div className="basis-1/2 justify-self-end">
                  <img
                    id="wallet-connect-image"
                    className="w-1/3 float-right"
                    src={selectedWallet.imgSrc}
                    alt={selectedWallet.name}
                  />
                </div>
              </div>
            </div>
          </div>
        )}{" "}
        {/* Add similar JSX for other wallet components */}
      </div>
    </div>
  );
}

export default WalletComponent;
