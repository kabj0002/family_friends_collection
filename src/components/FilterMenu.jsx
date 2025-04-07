//Keyoword: overflow scroll (skjul scroll-bar)
//Sorting, filter (katte, hunde osv)
//Ændre farve når active

const FilterMenu = () => {
  return (
    <div className="flex gap-3 overflow-scroll mx-2 my-4">
      <div className="flex flex-row items-center gap-2 border-gray-400 border-1 bg-white text-gray-400 text-sm rounded-full pl-3 pr-5 py-2">
        <div className="bg-pink-300 rounded-full w-8 h-8"></div>
        <p>Alle</p>
      </div>
      <div className="flex flex-row items-center gap-2 border-gray-400 border-1 bg-white text-gray-400 text-sm rounded-full pl-3 pr-5 py-2">
        <div className="bg-pink-300 rounded-full w-8 h-8"></div>
        <p>Katte</p>
      </div>
      <div className="flex flex-row items-center gap-2 border-gray-400 border-1 bg-white text-gray-400 text-sm rounded-full pl-3 pr-5 py-2">
        <div className="bg-pink-300 rounded-full w-8 h-8"></div>
        <p>Hunde</p>
      </div>
    </div>
  );
};

export default FilterMenu;
