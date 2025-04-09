//Vi skal kigge på hvordan vi henter billeder fra API. Det har vi ikke arbejdet med endnu!
"use client";
import Favorite from "./Favorite";
import Image from "next/image";

const Card = ({ animal }) => {
  return (
    <li className="bg-white rounded-2xl w-fit shadow-lg my-2">
      <div className="relative">
        <Image
          src="https://dbw3zep4prcju.cloudfront.net/animal/053a54be-f52f-4dcf-aa43-3d04b1e17033/image/919c12d7-1728-4e09-82fe-03905a01b494.jpeg?versionId=D0WIrDqcvFuYne0U6e.BtvZrF3iNZkfL&bust=1744013598&width=100"
          alt={`Pic of ${animal.name}`}
          width={300}
          height={200}
          className="rounded-2xl object-cover aspect[3/2] h-30 w-fill"
        />
        <div className="absolute top-2 right-2">
          <Favorite />
        </div>
      </div>
      <div className="flex justify-between mx-2 mb-2">
        <div className="flex flex-col my-2">
          <h3 className="font-semibold">{animal.name}</h3>
          <p className="text-gray-400 text-sm">{animal.breeds?.primary}</p>
        </div>
        <p className="text-gray-400 text-sm mt-2">{animal.age}</p>
      </div>
    </li>
  );
};

export default Card;
