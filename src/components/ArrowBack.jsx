import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const ArrowBack = () => {
  return (
    <div>
      <Link href="/">
        <IoIosArrowBack className="bg-white rounded-full w-8 h-8 p-1 cursor-pointer" />
      </Link>
    </div>
  );
};

export default ArrowBack;
