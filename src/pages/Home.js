import { AuctionBody } from "../components/auctions/Body";
import { NavComp } from "../components/authentication/NavComp";
import Footer from "../components/auctions/Footer";

const Home = () => {
  return (
    <>
      <NavComp />
      <AuctionBody />
      <Footer />
    </>
  );
};

export default Home;
