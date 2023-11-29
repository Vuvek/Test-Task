import ProviderStore from "../store/ProviderStore";
import Navigation from "../components/Header/Navigation";
import Footer from "./Footer/Footer";

const WrapperComponent = ({ children }) => {
  return (
    <>
      <ProviderStore>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ProviderStore>
    </>
  );
};

export default WrapperComponent;
