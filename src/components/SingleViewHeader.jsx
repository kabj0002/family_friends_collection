import ArrowBack from "./ArrowBack";
import Favorite from "./Favorite";
import Lokation from "./Lokation";
import Image from "next/image";

const SingleViewHeader = () => {
  return (
    <div className="relative w-full aspect-square mb-4 rounded-4xl overflow-hidden">
      <Image
        className="object-cover w-full h-full"
        src="https://dbw3zep4prcju.cloudfront.net/animal/053a54be-f52f-4dcf-aa43-3d04b1e17033/image/04834660-d942-48c7-8ffc-9f17e5e3529a.jpeg?versionId=uMw7.S8iOyu.fhfijbj9nQ9TZo1Q_RX8&bust=1744013597&width=300"
        alt="Pic of pet"
        fill // Brug `fill` for at få billedet til at fylde containeren
      />

      {/* Øverste venstre hjørne */}
      <div className="absolute top-4 left-4">
        <ArrowBack />
      </div>

      {/* Øverste højre hjørne */}
      <div className="absolute top-4 right-4">
        <Favorite />
      </div>

      {/* Nederste venstre hjørne */}
      <div className="absolute bottom-4 left-4">
        <Lokation />
      </div>
    </div>
  );
};
// <div className="">
//   <div className="flex flex-col justify-between">
//     <Image
//       className="rounded-4xl w-full h-auto aspect-square mb-4"
//       src="https://dbw3zep4prcju.cloudfront.net/animal/053a54be-f52f-4dcf-aa43-3d04b1e17033/image/04834660-d942-48c7-8ffc-9f17e5e3529a.jpeg?versionId=uMw7.S8iOyu.fhfijbj9nQ9TZo1Q_RX8&bust=1744013597&width=300"
//       alt="Pic of pet"
//       width={300}
//       height={300}
//     />
//     {/* <div className="flex flex-col justify-between p-6 bg-pink-300 rounded-4xl w-full h-auto aspect-square mb-4"> */}
//     <div className="flex justify-between">
//       <ArrowBack />
//       <Favorite />
//     </div>
//     <div className="w-fit">
//       <Lokation />
//     </div>
//   </div>
//   {/* </div> */}
// </div>

export default SingleViewHeader;
