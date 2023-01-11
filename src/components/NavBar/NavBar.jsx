const NavBar = () => {
  return (
    <nav className="flex items-center text-white w-full h-10 bg-slate-800">
      <div className="w-1/2 px-3">
        <div className=" bg-red-400 ">Logo</div>
      </div>
      <div className="w-1/2 flex justify-evenly">
        <div className=" bg-green-500 ">NavLink1</div>
        <div className=" bg-green-500 ">NavLink1</div>
      </div>
    </nav>
  );
};

export default NavBar;
