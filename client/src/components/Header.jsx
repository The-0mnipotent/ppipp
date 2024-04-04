function Header() {
  return (
    <div>
      {/* top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Discover your next <span className="text-slate-500">perfect</span>
          <br />
          home with ease
        </h1>
        <div className="text-gray-500 text-xs font-bold sm:text-sm">
          Unlock Your Dream Home with PropertyPulse - Your Ultimate Destination
          for Finding the Perfect Place to Live! <br /> Explore Our Vast
          Selection of Properties Today!
        </div>
      </div>
    </div>
  );
}

export default Header;
