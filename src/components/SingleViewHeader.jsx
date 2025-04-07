import ArrowBack from "./ArrowBack";
import Favorite from "./Favorite";
import Lokation from "./Lokation";

const SingleViewHeader = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-between p-6 bg-pink-300 rounded-4xl w-full h-auto aspect-square mb-4">
        <div className="flex justify-between">
          <ArrowBack />
          <Favorite />
        </div>
        <div className="w-fit">
          <Lokation />
        </div>
      </div>
    </div>
  );
};

export default SingleViewHeader;
