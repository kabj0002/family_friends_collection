import { FiBell } from "react-icons/fi";
//Man skal kunne vælge om notifikation er aktiv eller ej

const Header = () => {
  return (
    <div className="flex justify-between mx-6 my-4 items-center">
      <h2 className="font-bold">FamilyFriends</h2>
      <FiBell className="w-10 h-6" />
    </div>
  );
};

export default Header;
