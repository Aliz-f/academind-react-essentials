import reactLogo from "../assets/react-core-concepts.png";

function Header() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="w-80 h-80 -mt-15 md:-mt-20 md:w-96 md:h-96">
        <img
          src={reactLogo}
          className="object-contain w-full h-full"
          alt="react-core logo"
        />
      </div>
      <h1
        className="text-center font-bold text-5xl tracking-wider -mt-24
            bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent md:text-7xl"
      >
        React Essentials
      </h1>
      <p className="text-center text-purple-300 text-2xl mt-8">
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
      {/*<h3 className="text-center text-purple-200 text-3xl font-semibold mt-10">*/}
      {/*    Time to get started!*/}
      {/*</h3>*/}
    </div>
  );
}

export default Header;
