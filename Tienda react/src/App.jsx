import { useState } from "react";

import { RiArrowDownSLine } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { PiUserCircleDashed } from "react-icons/pi";
import { MdAddBox } from "react-icons/md";
import { HiOutlineChartPie } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
//components
import Sidebar from "./components/shared/Sidebar";
import Car from "./components/shared/Car";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
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
        <button onClick={toggleOrders} className="p-2">
          <HiOutlineChartPie />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoMdClose /> : <CiMenuFries />}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine />
              Dine In
            </button>
          </div>

          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="plato.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="plato.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="plato.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="plato.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="plato.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
            <Card
              img="plato.png"
              description="Speacy seasoned seafood nodles"
              price="$2.29"
              inventory="20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
