import React from "react";
import "./Layout-Profile.css";
import Card from "../../Herosection/Card/Card";
import Character from "../CharacterInfo/Character";
import Profile from "../Porfile/Pofile";

const LayoutProfile = () => {
  const iconarr = [
    { src: "nami.png", context: "Cute" },
    { src: "asdasd.jpg", context: "Very Cute" },
    { src: "a1326d27cb4dd9a624e201e0d4898506.jpg", context: "Hot" },
    { src: "2ssdasd.jpg", context: "Sexy" },
    { src: "asdasd.jpg", context: "Very Cute" },
  ];

  const characterstics = [
    "Master Navigator: Nami possesses unparalleled navigation skills, allowing the Straw Hat Pirates to safely traverse the dangerous seas of the Grand Line.",
    "Treasure Lover: She has a deep love for treasure and is always on the lookout for opportunities to increase her wealth, often using her cunning to achieve this.",
    "Caring and Loyal: Despite her obsession with money, Nami deeply cares for her crewmates and is fiercely loyal, often putting herself in danger to protect them.",
    "Strong-Willed and Determined: Nami's strong will and determination drive her to overcome challenges, whether it's fighting powerful enemies or standing up for her beliefs.",
  ];
  return (
    <>
      <div className="profile-c">
        <Profile />
      </div>
      <div className="character font">
        {" "}
        {characterstics.map((item) => (
          <Character character={item} />
        ))}
      </div>
      <div className="content font">Aditional Picture</div>
      <div className="container-P">
        {iconarr.map((items) => (
          <Card src={items.src} />
        ))}
      </div>
    </>
  );
};
export default LayoutProfile;
