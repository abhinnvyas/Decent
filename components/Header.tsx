function Header() {
  return (
    <div
      className="flex items-center justify-between w-screen p-2 px-3 md:px-5 h-15
    bg-stone-700 shadow-lg fixed top-0 z-50 inset-x-0"
    >
      <div>
        <a href="">
          <h1
            className="font-serif italic font-medium  text-xl md:text-xl 
            lg:text-2xl text-white"
          >
            Decent
          </h1>
        </a>
      </div>
      <div className="flex row space-x-2 p-2">
        <button
          className="bg-stone-500 p-2 shadow-sm text-white rounded-md 
            shadow-black hover:shadow-black hover:shadow-md hover:scale-105 transition-all 
            active:scale-95"
        >
          Login
        </button>
        <button
          className="bg-stone-500 p-2 shadow-sm text-white rounded-md 
            shadow-black hover:shadow-black hover:shadow-md hover:scale-105 transition-all 
            active:scale-95"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Header;
