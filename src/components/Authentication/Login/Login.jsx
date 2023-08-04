import { useContext, useState } from "react";
import Container from "../../Shared/Container/Container";
import { BsArrowLeft } from "react-icons/bs";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [success, setSuccess] = useState("");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    signInUser(data.email, data.password)
      .then(() => {
        toast.success("User sign in successully..!");
        setSuccess("User sign in successully..!");
        reset();
      })
      .catch((error) => toast.error(error.message));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        setSuccess("User sign in successully..!");
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
      <div className="text-center space-y-4 md:w-1/3 mx-auto">
        <h3 className="text-md md:text-xl text-pink-900 font-bold">
          Login to Mokx
        </h3>
        <p className="text-xs text-pink-900">
          Welcome back! Sign in using your social account or email to continue
          us
        </p>
        <div className="flex justify-center items-center gap-4">
          <BsFacebook size={32} />
          <FcGoogle onClick={handleGoogleSignIn} size={32} />
          <BsApple size={32} />
        </div>
        <div className="flex items-center my-4">
          <div className="border-t border-2 border-gray-300 flex-grow"></div>
          <div className="px-3 text-gray-800 font-bold text-lg">OR</div>
          <div className="border-t border-2 border-gray-300 flex-grow"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/3 mx-auto">
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
        <p className="text-green-600 font-bold">{success}</p>
        <div className="space-y-2 my-10">
          <button className="bg-[#FFC746] text-pink-900 font-semibold w-full p-2 rounded-xl shadow-lg">
            Login
          </button>
          <p className="font-semibold text-center text-yellow-600">
            Forgot Password?
          </p>
        </div>
      </form>
    </Container>
  );
};

export default Login;
