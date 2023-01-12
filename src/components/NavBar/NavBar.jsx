const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-slate-500">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-red-400 flex items-center justify-center text-white font-bold ">
            A
          </div>
          <p className="text-xl">
            Guitar <span className="opacity-80">Center</span>
          </p>
        </div>
        <div className="flex text-white w-1/3 justify-between gap-4">
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
