import { Link } from "react-router-dom";
import namasteImg from "../../assets/namaste.png";
import omImg from "../../assets/om.png";
import Container from "../Shared/Container/Container";

const WelcomePage = () => {
  return (
    <Container>
      <div className="flex justify-center items-center h-[430px] mx-auto">
        <div className="flex flex-col items-center gap-2">
          <img src={namasteImg} className="w-24" alt="" />
          <h2 className="text-yellow-600 font-semibold text-md">Mokx</h2>
        </div>
      </div>
      <Link to="/chathome">
        <div className="flex justify-center items-center gap-2">
          <h2 className="text-center text-md text-fuchsia-800 font-semibold">
            Back to Vedas
          </h2>
          <img src={omImg} className="w-4 h-4" alt="" />
        </div>
      </Link>
    </Container>
  );
};

export default WelcomePage;
