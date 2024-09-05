import React from "react";
import "./Layout.css";
import Herosection from "../Herosection/HeroLayout/Herosection";
import Nav from "../Navigation/Nav";
import LayoutProfile from "../Profile/Layout-Profile/Layout-Profile";

const Layout = () => {
  const navelements = [
    { src: "nami.png", context: "Cute" },
    { src: "asdasd.jpg", context: "Very Cute" },
    { src: "a1326d27cb4dd9a624e201e0d4898506.jpg", context: "Hot" },
    { src: "2ssdasd.jpg", context: "Sexy" },
    { src: "nami.png", context: "Cute" },
    { src: "asdasd.jpg", context: "Very Cute" },
  ];
  return (
    <>
      <div className="align">
        <div className="heroContainer">
          <div className="navigationnn">
            {navelements.map((item, index) => (
              <Nav src={item.src} />
            ))}
          </div>
          <div className="hero">
            <div className="main">
              <Herosection />
            </div>
            <div className="profileContainer">
              <LayoutProfile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
