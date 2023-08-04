import { Link } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import { BsArrowLeft } from "react-icons/bs";
import namasteImg from "../../../assets/namaste.png";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";

const Registration = () => {
  const { createUserAccount } = useContext(AuthContext);
  const [success, setSuccess] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    createUserAccount(data.email, data.password)
      .then(() => {
        toast.success("User created successully..!");
        setSuccess("User created successully..!");
        reset();
      })
      .catch((error) => toast.error(error.message));
  };

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
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3 mx-auto">
        <div className="relative mt-6">
          <input
            type="text"
            {...register("name", { required: true })}
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
            {...register("email", { required: true })}
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
            {...register("password", { required: true })}
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
            {...register("confirm", { required: true })}
            placeholder="Confirm Password"
            className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
          />
          <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">
            Confirm Password
          </label>
        </div>
        <p className="text-green-600 font-bold">{success}</p>
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
