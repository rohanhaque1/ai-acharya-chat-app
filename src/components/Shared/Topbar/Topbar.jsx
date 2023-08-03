import { GiNetworkBars } from "react-icons/gi";
import { BsWifi, BsBatteryFull } from "react-icons/bs";
import Container from "../Container/Container";

const Topbar = () => {
  return (
    <Container>
      <div className="flex justify-between items-center my-4">
        <div className="text-xs lg:text-sm font-bold">9.41</div>
        <div className="flex items-center gap-2">
          <GiNetworkBars />
          <BsWifi />
          <BsBatteryFull />
        </div>
      </div>
    </Container>
  );
};

export default Topbar;
