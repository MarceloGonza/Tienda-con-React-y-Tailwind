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
  const [cart, setCart] = useState([]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  // carrito

  const [products] = useState([
    {
      id: 1,
      img: "plato.png",
      description: "Spicy seasoned seafood noodles",
      price: 2.29,
      inventory: 20,
    },
    {
      id: 2,
      img: "plato.png",
      description: "Grilled Chicken with Salad",
      price: 5.49,
      inventory: 15,
    },
    {
      id: 3,
      img: "plato.png",
      description: "Cheese Pizza",
      price: 3.99,
      inventory: 10,
    },
    {
      id: 4,
      img: "plato.png",
      description: "Beef Burger with Fries",
      price: 4.99,
      inventory: 8,
    },
    {
      id: 5,
      img: "plato.png",
      description: "Sushi Platter",
      price: 7.99,
      inventory: 12,
    },
    {
      id: 6,
      img: "plato.png",
      description: "Vegan Wrap",
      price: 3.59,
      inventory: 5,
    },
  ]);

  //eliminar producto del carrito

  const removeProductCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    console.log(removeProductCart);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car
        showOrder={showOrder}
        setShowOrder={setShowOrder}
        cart={cart}
        removeProductCart={removeProductCart}
      />
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

          {/* Renderiza los productos */}
          <div className="px-4 py-8  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <Card key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
