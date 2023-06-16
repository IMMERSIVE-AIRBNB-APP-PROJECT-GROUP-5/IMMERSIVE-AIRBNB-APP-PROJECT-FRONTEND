import Card from "../components/Card";
import Navbar from "../components/NavbarB";
import Footer from "../components/Footer";

const Beranda = () => {
  return (
    <div>
      <Navbar label="Beranda" />
      <div className="container mx-auto mt-10 p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex justify-between">
            <Card />
          </div>
          <div className="flex justify-between">
            <Card />
          </div>
          <div className="flex justify-between">
            <Card />
          </div>
          <div className="flex justify-between">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Beranda;
