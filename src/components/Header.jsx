// import { FiBell } from "react-icons/fi";
//Man skal kunne vælge om notifikation er aktiv eller ej
"use client";
import NotifikationBell from "@/components/NotifikationBell";

const Header = () => {
  return (
    <div className="flex justify-between my-6 items-center sticky top-0 bg-white py-2 z-1">
      <h2 className="font-bold ml-6">FamilyFriends</h2>
      <NotifikationBell className="w-10 h-6 mr-6" />
      {/* <FiBell className="w-10 h-6 mr-6" /> */}
    </div>
  );
};

export default Header;
