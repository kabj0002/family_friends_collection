"use client";
import { FiBell } from "react-icons/fi";
// import { MdNotifications, MdNotificationsActive } from "react-icons/md"; // Hvis du vil bruge dem senere
import useStore from "@/app/store/notificationStore";

const NotifikationBell = () => {
  const { messages } = useStore();
  console.log("Bell: ", messages);

  return (
    <div className="relative">
      <FiBell size={24} className="text-black" />
      {messages > 0 && (
        <div className="absolute -top-1 right-0 w-3 h-3 bg-orange-400 rounded-full border-2 border-white"></div>
      )}
    </div>
  );
};

export default NotifikationBell;
