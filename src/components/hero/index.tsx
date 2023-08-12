const Hero = () => {
  return (
    <section>
      <div className="max-w-[90%] mx-auto z-10">
        <section className="mt-20">
          <div className="">
            <h1 className="text-white text-3xl font-orbitron font-medium hero__title relative transition sm:text-4xl md:text-6xl">
              Free Commemorative <br />
              <span className="text-green-500">NFT</span>
            </h1>
            <p className="text-white font-orbitron mt-4 md:text-2xl transition md:mt-6">
              Improving customer satisfaction and business efficency <br />
              and helping companies achieve quantum scalability
            </p>
            <button className="text-black bg-green-500 px-16 py-2 rounded-sm mt-6 hover:bg-green-600 transition hover:scale-10 md:px-24 md:py-3 text-xl">
              mint
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Hero;
