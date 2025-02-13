import { FaShoppingCart } from "react-icons/fa";

const Card = ({ product, addToCart }) => {
  return (
    <div className="bg-[#1F1D2B] p-6 rounded-xl flex flex-col items-center justify-between gap-2 text-center text-gray-300 w-full max-w-xs mx-auto">
      <img
        src={product.img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
        alt={product.description}
      />
      <p className="text-xl">{product.description}</p>
      <span className="text-gray-300">${product.price.toFixed(2)}</span>
      <p className="text-gray-600">{product.inventory} Bowls available</p>
      <button
        className="mb-2 bg-[#ec7c6a] text-white py-1 px-4 rounded-lg flex gap-2 items-center mt-auto"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default Card;
