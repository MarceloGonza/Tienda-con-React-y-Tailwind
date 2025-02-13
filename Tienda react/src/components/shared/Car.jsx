import { IoCloseSharp } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";

const Car = ({ showOrder, setShowOrder, cart, removeProductCart }) => {
  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50
      ${showOrder ? "right-0" : "-right-full"}`}
    >
      <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full">
        <IoCloseSharp
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Your Cart</h1>
        <div className="flex items-center gap-4 flex-wrap mb-8">
          <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
            Dine In
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            To Go
          </button>
          <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
            Delivery
          </button>
        </div>

        {/* Lista de productos en el carrito */}
        <div className="h-[400px] overflow-scroll overflow-x-hidden">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-[#262837] p-4 rounded-xl mb-4 flex flex-nowrap justify-between"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.img}
                      className="w-12 h-12 object-cover flex"
                    />
                    <div>
                      <h5 className="text-sm pb-1">{item.description}</h5>
                      <p className="text-xs text-gray-500 flex items-center pt-1 pb-1">
                        ${item.price.toFixed(2)}
                      </p>
                      <span className="text-gray-400 p-3 gap-3 relative right-3">
                        x {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
                {/* icono delete */}
                <AiFillDelete
                  onClick={() => removeProductCart(item.id)}
                  className="text-[#ec7c6a] text-2xl cursor-pointer relative top-5"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Car;
