import { FiStar } from "react-icons/fi";
//Lave white fillcolor ved active

const Favorite = () => {
  return (
    <div>
      <FiStar className="w-8 h-8 stroke-white bg-white/30 backdrop-blur-sm rounded-full p-1 cursor-pointer" />
    </div>
  );
};

export default Favorite;
