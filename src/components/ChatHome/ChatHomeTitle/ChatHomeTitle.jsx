import { BsStars, BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const ChatHomeTitle = () => {
  return (
    <div className="py-8">
      <div className="space-y-4">
        <h2 className="text-white text-4xl font-semibold">
          Discover the timeless wishdom of{" "}
          <span className="text-yellow-500">the Vedas</span>
        </h2>
        <p className="text-white font-medium">
          Sign up and{" "}
          <span className="text-yellow-500">
            journey through ancient knowledge with Arya <BsStars />
          </span>
        </p>
        <div className="md:w-1/3 mx-auto">
          <div className="flex justify-center items-center gap-4">
            <BsFacebook size={32} />
            <FcGoogle size={32} />
            <BsApple size={32} />
          </div>
          <div className="flex items-center my-4">
            <div className="border-t border-2 border-gray-300 flex-grow"></div>
            <div className="px-3 text-gray-800 font-bold text-lg">OR</div>
            <div className="border-t border-2 border-gray-300 flex-grow"></div>
          </div>
          <div className="space-y-2">
            <Link to="/register">
              <button className="bg-[#FFC746] text-pink-900 font-semibold w-full p-3 rounded-xl shadow-lg">
                Sign up with mail
              </button>
            </Link>
            <p className="font-semibold text-center text-white">
              Existing Account? <Link to="/login" className="text-yellow-600">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHomeTitle;
