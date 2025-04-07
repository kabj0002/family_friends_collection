//Vi skal kigge på hvordan vi henter billeder fra API. Det har vi ikke arbejdet med endnu!

import Favorite from "./Favorite";

const Card = () => {
  return (
    <div className="bg-white rounded-2xl w-fit shadow-lg my-2">
      <div className="flex justify-end p-2 bg-pink-300 rounded-2xl w-40 h-27">
        <Favorite />
      </div>
      <div className="flex justify-between mx-2 mb-2">
        <div className="flex flex-col my-2">
          <h3 className="font-semibold">Harry</h3>
          <p className="text-gray-400 text-sm">Yorkshire Terrier</p>
        </div>
        <p className="text-gray-400 text-sm mt-2">Young</p>
      </div>
    </div>
  );
};

export default Card;
