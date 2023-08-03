import { Link } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { BsArrowLeft } from "react-icons/bs";
import namasteImg from "../../../assets/namaste.png";

const Registration = () => {
  return (
    <Container>
      <Link to="/chathome">
        <div className="my-8">
          <BsArrowLeft />
        </div>
      </Link>
      <div className="flex justify-center items-center mx-auto my-6">
        <div className="flex flex-col items-center gap-2">
          <img src={namasteImg} className="w-24" alt="" />
          <h2 className="text-yellow-600 font-semibold text-md">Mokx</h2>
        </div>
      </div>
      <div className="text-center space-y-4 md:w-1/3 mx-auto">
        <h3 className="text-md md:text-xl text-pink-900 font-bold">
          Sign up with Email
        </h3>
        <p className="text-xs text-pink-900">
          Enter your details and dive into a realm of ancient wishdom!
        </p>
      </div>
      <form className="md:w-1/3 mx-auto">
        <div className="relative mt-6">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
            Your name
          </label>
        </div>
        <div className="relative mt-6">
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
            Your email
          </label>
        </div>
        <div className="relative mt-6">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
            Password
          </label>
        </div>
        <div className="relative mt-6">
          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
            Confirm Password
          </label>
        </div>
        <div className="space-y-2 my-10">
          <button className="bg-[#FFC746] text-pink-900 font-semibold w-full p-2 rounded-xl shadow-lg">
            Create an account
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Registration;
