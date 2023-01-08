import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../components /ImageSlider";
import { SliderData } from "../components /SliderData";
import "./home.css";
// import tmuna1 from "../src/assets/tmona1.jpg";

const styles = {
  width: "100%",
  height: "600px",
  backgroundImage: "url(../src/assets/tmuna3.jpg)",
  backgroundSize: "cover",
  backgroundPosition: " center",
};
const Home = () => {
  return (
    <div div className="container">
      <div className="home">
        {/* <img src="../src/assets/tmuna3.jpg" alt="" /> */}
      </div>
      <div>
        {/* <section style={{ marginTop: "50px" }}>
          <ul>
            <li>
              <Link to={"/"}>
                <img src="../src/assets/tmuna1.jpg" alt="" />
              </Link>
            </li>
            <li>
              <img src="../src/assets/tmuna2.jpg" alt="" />
            </li>
            <li>
              <img src="../src/assets/tmuna3.jpg" alt="" />
            </li>
          </ul>
        </section> */}
        <ImageSlider slides={SliderData} />
      </div>
    </div>
  );
};

export default Home;
