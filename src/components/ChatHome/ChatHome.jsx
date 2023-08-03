import Container from "../Shared/Container/Container";
import Banner from "./Banner/Banner";
import ChatHomeTitle from "./ChatHomeTitle/ChatHomeTitle";

const ChatHome = () => {
  return (
    <div>
      <Banner />
      <div className="bg-[#69235B]">
        <Container>
          <ChatHomeTitle />
        </Container>
      </div>
    </div>
  );
};

export default ChatHome;
