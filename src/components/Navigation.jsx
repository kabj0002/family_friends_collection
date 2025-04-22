import { FiHome } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import Link from "next/link";

//OBS lave til LINKS-nav! og sætte routing op
//Husk active color!

const Navigation = () => {
  return (
    <nav className="flex justify-around my-6 sticky bottom-0 bg-white py-3">
      <Link href="/">
        <FiHome className="w-7 h-7 stroke-gray-400" />
      </Link>
      <Link href="/favorites">
        <FiStar className="w-7 h-7 stroke-gray-400" />
      </Link>
      <Link href="">
        <IoChatbubbleOutline className="w-7 h-7 stroke-gray-400" />
      </Link>
      <Link href="">
        <FiUser className="w-7 h-7 stroke-gray-400" />
      </Link>
    </nav>
  );
};

export default Navigation;
