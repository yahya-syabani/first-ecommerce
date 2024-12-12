import React from "react";
import { Categories } from "../assets/mockData";

function Home() {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>Shop by Category</div>
          </div>
          <ul>
            {Categories.map((category, index) => (
              <li key={index}>
                <div></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={HeroImage} alt="" />
          <div>
            <p>Yahya</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
