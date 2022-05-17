import React, { useState } from "react";
import { GoVerified } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

function Main() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    // Update state with incremented value
    setCount(count + 1);
  };
  return (
    <div className="main-container">
      <div className="container">
        <img src="./assets/logo1.jpeg" className="logo-img" alt="logo" />
        <h3 className="logo-text">Some Verified Account</h3>
        <span>
          <GoVerified
            style={{ color: "white", fontSize: "20px", marginTop: ".4rem" }}
          />
        </span>
        <span className="span-text">@RandomText . 3h</span>
      </div>

      <div className="post-section">
        <p className="post-text">#randomPost Some paragraphs #STAR #NewPost</p>
      </div>
      <div className="post-imgSec">
        <img src="./assets/image.jpg" alt="post" className="post-img" />
      </div>
      <div className="icon-section">
        <div className="icon-item">
          {" "}
          <FaRegComment
            style={{ color: "lightGrey", fontSize: "20px", marginTop: ".4rem" }}
          />
          <span className="icon-text">711</span>
        </div>
        <div className="icon-item">
          <AiOutlineRetweet
            style={{ color: "lightGrey", fontSize: "20px", marginTop: ".4rem" }}
          />
          <span className="icon-text">13.7K</span>
        </div>
        <div className="icon-item">
          <AiOutlineHeart
            onClick={incrementCount}
            style={{ color: "lightGrey", fontSize: "20px", marginTop: ".4rem" }}
          />
          <span className="icon-text">{count}</span>
        </div>
        <div className="icon-item">
          <BiUpload
            style={{ color: "lightGrey", fontSize: "20px", marginTop: ".4rem" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
