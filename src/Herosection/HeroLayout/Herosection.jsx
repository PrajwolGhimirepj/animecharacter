import React from "react";
import "./Herosection.css";
import Search from "../Search/Search";
import Card from "../Card/Card";
import SideNav from "../SideNavigation/NavSide";

const Herosection = () => {
  const imagearr = [
    { src: "nami.png", context: "Cute" },
    { src: "asdasd.jpg", context: "Very Cute" },
    { src: "a1326d27cb4dd9a624e201e0d4898506.jpg", context: "Hot" },
    { src: "2ssdasd.jpg", context: "Sexy" },
  ];

  const iconarr = [
    { src: "nami.png", context: "Cute" },
    { src: "asdasd.jpg", context: "Very Cute" },
    { src: "a1326d27cb4dd9a624e201e0d4898506.jpg", context: "Hot" },
    { src: "2ssdasd.jpg", context: "Sexy" },
  ];
  return (
    <>
      <div className="container">
        <div className="search">
          <Search />
        </div>
        <div className="imgNavigation">
          <div className="imagecontainer">
            <div className="imageholder">
              <img src="nami.png" alt="" />
            </div>
            <div className="context font">
              Nami is the talented and resourceful navigator of the Straw Hat
              Pirates in One Piece. Known for her keen intellect, exceptional
              map-making skills, and ability to predict weather patterns, she
              plays a crucial role in guiding the crew through the treacherous
              seas of the Grand Line. Initially driven by a desire to free her
              home from the clutches of the evil Arlong, Nami joins the crew
              with a strong sense of determination. Over time, she becomes a
              beloved and indispensable member of the Straw Hats, known for her
              sharp wit, cunning strategies, and fierce loyalty to her friends.
            </div>
          </div>
          <div className="navigation">
            {iconarr.map((item, index) => (
              <SideNav scr={item.src} />
            ))}
          </div>
        </div>
        <div className="credits font">Edited by @Pj</div>
        <div className="photodisplay">
          {imagearr.map((item, index) => (
            <Card src={item.src} context={item.context} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Herosection;
