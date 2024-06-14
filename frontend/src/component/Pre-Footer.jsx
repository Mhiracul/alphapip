const PreFooter = () => {
  return (
    <section className="bg-white py-10 px-5 md:px-10">
      <section className="grid grid-cols-12 gap-8 place-items-center mx-auto">
        <div className="col-span-6 md:col-span-3 px-4">
          <div className="text-center flex flex-col justify-center items-center">
            <img className="w-12 h-12" src="/leaves.svg" alt="" />

            <div className="my-2">
              <h3 className="text-black font-bold text-2xl">1794</h3>
              <p className="md:text-sm text-base text-black -mt-2 font-normal tracking-normal">
                Hash Rate
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 px-4">
          <div className="text-center flex flex-col h-full justify-center items-center">
            <img className="w-12 h-12" src="/sustainable.svg" alt="" />

            <div className="my-2">
              <h3 className="text-black font-bold text-2xl">649</h3>
              <p className="md:text-sm text-base text-black -mt-2 font-normal tracking-normal">
                Operators
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 px-4">
          <div className="text-center flex flex-col h-full justify-center items-center">
            <img className="w-12 h-12" src="/ecohouse.svg" alt="" />
            <div className="my-2">
              <h3 className="text-black font-bold text-2xl">852</h3>
              <p className="md:text-sm text-base text-black -mt-2 font-normal tracking-normal">
                Power Houses
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 px-4">
          <div className="text-center flex flex-col h-full justify-center items-center">
            <img className="w-12 h-12" src="/greenhouse.svg" alt="" />
            <div className="my-2">
              <h3 className="text-black font-bold text-2xl">198</h3>
              <p className="md:text-sm text-base text-black -mt-2 font-normal tracking-normal">
                Countries
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-10 px-5 md:px-10">
        <div className="lg:w-4/5 text-center mx-auto">
          <h1 className="text-4xl basis-3/5 text-black font-bold tracking-tighter">
            Secure Yourself With Our Mobile App
          </h1>
          <div className="flex justify-center space-x-2">
            <a className="" href="/coming-soon">
              <img className="w-36" src="/appstore.svg" alt="" />
            </a>
            <a className="" href="/coming-soon">
              <img className="w-36" src="/playstore.svg" alt="" />
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PreFooter;
