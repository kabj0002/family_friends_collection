import Image from "next/image";

const Lokation = () => {
  return (
    <div className="flex flex-row gap-2 text-white text-sm pl-2 pr-3 py-2 stroke-white bg-white/30 backdrop-blur-sm rounded-2xl">
      {/* <div className="bg-green-300 rounded-lg w-8 h-8"></div> */}
      <Image
        className="object-cover rounded-lg w-8 h-8"
        src="https://dbw3zep4prcju.cloudfront.net/animal/053a54be-f52f-4dcf-aa43-3d04b1e17033/image/04834660-d942-48c7-8ffc-9f17e5e3529a.jpeg?versionId=uMw7.S8iOyu.fhfijbj9nQ9TZo1Q_RX8&bust=1744013597&width=300"
        alt="Pic of pet"
        width={100}
        height={100}
      />
      <p>Baton Rouge</p>
    </div>
  );
};

export default Lokation;
