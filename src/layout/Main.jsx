import { Outlet } from "react-router-dom";
import Topbar from "../components/Shared/Topbar/Topbar";

const Main = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

export default Main;
