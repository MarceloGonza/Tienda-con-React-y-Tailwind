import { useState } from "react";

import { CiMenuFries } from "react-icons/ci";
import { PiUserCircleDashed } from "react-icons/pi";
import { MdAddBox } from "react-icons/md";
import { HiOutlineChartPie } from "react-icons/hi2";
//components
import Sidebar from "./components/shared/Sidebar";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar />
      {/* Menu movil */}
      <nav
        className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex 
      items-center justify-between rounded-tl-xl rounded-tr-xl"
      >
        <button className="p-2">
          <PiUserCircleDashed />
        </button>
        <button className="p-2">
          <MdAddBox />
        </button>
        <button className="p-2">
          <HiOutlineChartPie />
        </button>
        <button className="text-white p-2">
          <CiMenuFries />
        </button>
      </nav>
    </div>
  );
}

export default App;
