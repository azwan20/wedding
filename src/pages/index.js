import { useState } from "react";
import Gift from "./gift";
import Homes from "./home";
import Maps from "./maps";
import Mempelai from "./mempelai";
import Navbar from "./navbar";
import Quran from "./quran";
import Salam from "./salam";
import Thanks from "./thanks";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(true);
  }

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <Homes handleNavbar={handleNavbar} />;
      case 1:
        return <Quran />;
      case 2:
        return <Salam />;
      case 3:
        return <Mempelai />;
      case 4:
        return <Maps />;
      case 5:
        return <Gift />
      case 6:
        return <Thanks />
      default:
        return <div>Select an item</div>;
    }
  };



  return (
    <>
      <div className="home">
        <div className="contentUtama">
          {renderContent()}
          <Navbar setActiveIndex={setActiveIndex} navbar={navbar} />
        </div>
      </div>
    </>
  );
}
