//Keyoword: overflow scroll (skjul scroll-bar)
//Sorting, filter (katte, hunde osv)
//Ændre farve når active
import Image from "next/image";

const FilterMenu = () => {
  return (
    <div className="flex gap-3 overflow-scroll mx-2 my-4">
      <div className="flex flex-row items-center gap-2 border-gray-300 border-1 bg-white text-gray-400 text-sm rounded-full pl-3 pr-5 py-2">
        <Image
          className="object-cover rounded-full w-8 h-8"
          src="https://dbw3zep4prcju.cloudfront.net/animal/053a54be-f52f-4dcf-aa43-3d04b1e17033/image/04834660-d942-48c7-8ffc-9f17e5e3529a.jpeg?versionId=uMw7.S8iOyu.fhfijbj9nQ9TZo1Q_RX8&bust=1744013597&width=300"
          alt="Pic of pet"
          width={100}
          height={100}
        />
        <p>Alle</p>
      </div>
      <div className="flex flex-row items-center gap-2 border-gray-300 border-1 bg-white text-gray-400 text-sm rounded-full pl-3 pr-5 py-2">
        <Image
          className="object-cover rounded-full w-8 h-8"
          src="https://dbw3zep4prcju.cloudfront.net/animal/053a54be-f52f-4dcf-aa43-3d04b1e17033/image/919c12d7-1728-4e09-82fe-03905a01b494.jpeg?versionId=D0WIrDqcvFuYne0U6e.BtvZrF3iNZkfL&bust=1744013598&width=300"
          alt="Pic of pet"
          width={100}
          height={100}
        />
        <p>Katte</p>
      </div>
      <div className="flex flex-row items-center gap-2 border-gray-300 border-1 bg-white text-gray-400 text-sm rounded-full pl-3 pr-5 py-2">
        <Image
          className="object-cover rounded-full w-8 h-8"
          src="https://dbw3zep4prcju.cloudfront.net/animal/053a54be-f52f-4dcf-aa43-3d04b1e17033/image/04834660-d942-48c7-8ffc-9f17e5e3529a.jpeg?versionId=uMw7.S8iOyu.fhfijbj9nQ9TZo1Q_RX8&bust=1744013597&width=300"
          alt="Pic of pet"
          width={100}
          height={100}
        />
        <p>Hunde</p>
      </div>
    </div>
  );
};

export default FilterMenu;
