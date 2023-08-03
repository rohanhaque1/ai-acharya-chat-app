import chatAi from "../../../assets/chatai.jpg";

const Banner = () => {
  return (
    <>
      <div>
        <img src={chatAi} className="relative" alt="" />
        <h3 className="absolute left-1/2 transform -translate-x-1/2 -translate-y-3  bg-purple-300 text-purple-900 text-xs font-semibold px-4 py-1 rounded">
          Arya, AI Acharya
        </h3>
      </div>
    </>
  );
};

export default Banner;
