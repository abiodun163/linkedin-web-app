import React from 'react';
import "../styles/RightSideSection.css";
//import InfoIcon from "@mui/icons-material"
//import FibreManualRecordIcon from "@mui/icons-material"

const RightSideSection = () => {
  const newsArticle = (heading,  subtitle) => {
    return <div className="widget__article">
      <div className="widget__left">
        {/* <FibreManualRecordIcon /> */}
      </div>
      <div className="widget__right">
        <h4>{ heading }</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  }
  return (
    <div className="RightSideSection">
      <div className="rightSide__header">
        <h2>LinkedIn News</h2>
        {/*  <InfoIcon /> */}
      </div>

      {newsArticle("ABIODUN is back", "Top news - 100k+ readers")}
      {newsArticle("CoronaVirus UK update", "Top news - 732k+ readers")}
    </div>
  );
}

export default RightSideSection