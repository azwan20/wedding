import { useState, useEffect, useRef } from "react";
import Gift from "./rscv";
import Homes from "./home";
import Maps from "./maps";
import Mempelai from "./mempelai";
import Navbar from "./navbar";
import Quran from "./quran";
import Salam from "./salam";
import Thanks from "./gift";
import Thankss from "./thanks";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [navbar, setNavbar] = useState(false);
  const [sound, setSound] = useState(true);
  const audioRef = useRef(null);

  const handleNavbar = () => {
    setNavbar(true);
    audioRef.current.play();
  };

  const handleSound = () => {
    setSound(!sound);
    if (sound) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.play().catch((error) => {
        console.error("Auto-play was prevented:", error);
      });
    }
  }, []);

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
        return <Gift />;
      case 6:
        return <Thanks />;
      case 7:
        return <Thankss />;
      default:
        return <div>Select an item</div>;
    }
  };

  return (
    <>
      <div className="home">
        <div className="contentUtama">
        <audio ref={audioRef} src="dipertigamalam.mp3" loop autoplay />
          <div className="sound" onClick={handleSound}>
            {!sound ? (
              <svg className="m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L9.91 6.09L12 8.18M4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.53C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.96L19.73 21L21 19.73L12 10.73M19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.6455 14.8709 20.999 13.4465 21 12C21 7.72 18 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V10.18L16.45 12.63C16.5 12.43 16.5 12.21 16.5 12Z" fill="white" />
              </svg>
            ) : (
              <svg className="m-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 1.29001V22.71L5.737 17.5H1V6.50001H5.737L15 1.29001ZM4.999 8.50001H3V15.5H4.999V8.50001ZM6.999 15.915L13 19.29V4.71001L6.999 8.08401V15.915ZM20.979 6.98201L21.582 7.78001C22.4998 8.99558 22.9961 10.4774 22.9956 12.0005C22.995 13.5237 22.4977 15.0051 21.579 16.22L20.976 17.018L19.381 15.812L19.984 15.014C20.6405 14.1461 20.9959 13.0876 20.9963 11.9993C20.9967 10.9111 20.6419 9.85239 19.986 8.98401L19.383 8.18701L20.979 6.98201Z" fill="white" />
              </svg>
            )}
          </div>
          {renderContent()}
          <Navbar setActiveIndex={setActiveIndex} navbar={navbar} />
        </div>
      </div>
    </>
  );
}
