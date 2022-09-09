import "./styles.css";
import { useState } from "react";

const database = {
  0: [
    {
      name: "DJI Osmo Action",
      desc: "DJI's first action camera. Great reliability and stablization",
      rating: 4.5
    },
    {
      name: "GoPro Hero 10",
      desc:
        "The latest successor to the crowd favourite. Better audio quality compared to the Osmo.",
      rating: 4
    },
    {
      name: "Insta360",
      desc:
        "Probably the best 360 degree camera in the market. Average at everything else",
      rating: 3.5
    }
  ],
  1: [
    {
      name: "Mi Powerbank",
      desc: "Two outputs and inputs of 18W. 4-LED battery indicators",
      rating: 4
    },
    {
      name: "Realme Powerbank",
      desc: "Supports 30W charging. Available in a vibrant yellow color",
      rating: 4.2
    },
    {
      name: "URBN Powerbank",
      desc: "Small and compact, without cutting down on battery capacity",
      rating: 4
    }
  ],
  2: [
    {
      name: "OPPO Enco M32",
      desc: "High quality Audio Driver, Fast Charge, Magnetic power control",
      rating: 4.5
    },
    {
      name: "Oneplus Bullets Z2",
      desc:
        "Fast Charge, large bass driver, but not a big improvement over its predecessor",
      rating: 4
    },
    {
      name: "Noise Combat",
      desc: "Good low-latency mode, average in other aspects",
      rating: 3.5
    }
  ],
  3: [
    {
      name: "Apple Watch Ultra",
      desc:
        "For those who push themselves more than they should, both in terms of physical strain and money",
      rating: 4.5
    },
    {
      name: "Samsung Galaxy Watch 5",
      desc:
        "Best watch to buy for an android user. Seamless connectivity and great UI",
      rating: 4
    },
    {
      name: "Amazfit Bip 3",
      desc: "Decent buy within a budget. Ideal for fitness enthusiasts",
      rating: 3
    }
  ]
};

export default function App() {
  const [listItems, setListItems] = useState([]);

  function clickHandler(e) {
    if (!e.target.dataset.id) return;

    const category = e.target.dataset.id;
    e.target.classList.add("active");
    setListItems(database[category]);
  }

  return (
    <div className="App">
      <h1>top3Tech</h1>
      <p className="subtitle">
        Click on a category to view its top-three items
      </p>

      <div className="center">
        <div onClick={clickHandler} className="container">
          <button className="btn" data-id="0">
            Action Cam
          </button>
          <button className="btn" data-id="1">
            Powerbank
          </button>
          <button className="btn" data-id="2">
            Earphone
          </button>
          <button className="btn" data-id="3">
            SmartWatch
          </button>
          <div className="list">
            <ul>
              {listItems.map((item, i) => (
                <li key={i} className="list-item">
                  <div className="list-item-details">
                    <p className="list-item-details-title">{item.name}</p>
                    <p className="list-item-details-desc">{item.desc}</p>
                  </div>
                  <p className="list-item-rating">{item.rating}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
