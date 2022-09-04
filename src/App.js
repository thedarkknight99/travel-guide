import { useState } from "react";
import "./styles.css";

const places = {
  Maharashtra: [
    {
      name: "Ajanta and Ellora Caves",
      description:
        "Ajanta and Ellora caves, considered to be one of the finest examples of ancient rock-cut caves, are located near Aurangabad in Maharashtra, India."
    },
    {
      name: "Mahabaleshwar",
      description:
        "Mahabaleshwar is a hill station located in the Western Ghats, in Satara district of Maharashtra. Apart from its strawberries, Mahabaleshwar is also well known for its numerous rivers, magnificent cascades and majestic peaks."
    },
    {
      name: "Panchgani",
      description:
        "Deriving its name from the five hills surrounding it, Panchgani is a popular hill station near Mahabaleshwar in Maharashtra, famous for its various sunset and sunrise points and scenic valley view."
    },
    {
      name: "Bhandardara",
      description:
        "Bhandardara, a hill station nestled in the Sahyadri ranges of Maharashtra, has all the nature's blessings a place can get. The lush greenery, the humble waterfalls and surrounded by high mountains makes for the perfect holiday spot for city dwellers."
    },
    {
      name: "Lonavala",
      description:
        "Situated in the Sahyadri range of the Western Ghats close to Pune and Mumbai, Lonavala is the most visited hill station in Maharashtra and the place to be during monsoons."
    }
  ],
  Karnataka: [
    {
      name: "Coorg",
      description:
        "Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. It also stands as a popular destination because of its culture and people."
    },
    {
      name: "Mysore",
      description:
        "Famously known as The City of Palaces, it wouldn’t be wrong to say that Mysore, currently Mysuru, is one of the most important places in the country regarding ancient reigns. It is replete with the history of its dazzling royal heritage, intricate architecture, its famed silk sarees etc."
    },
    {
      name: "Hampi",
      description:
        "Hampi, the city of ruins, is a UNESCO World Heritage Site. Situated in the shadowed depth of hills and valleys in the state of Karnataka, this place is a historical delight for travellers. Surrounded by 500 ancient monuments, beautiful temples, bustling street markets, bastions, treasury building etc."
    },
    {
      name: "Gokarna",
      description:
        "With its pristine beaches and breathtaking landscapes, Gokarna is a Hindu pilgrimage town in Karnataka and a newly found hub for beach lovers and hippies. Situated on the coast of Karwar, every year Gokarna welcomes hordes of tourists from around the world in search of sanctity and relaxation."
    },
    {
      name: "Udupi",
      description:
        "Udupi is a coastal town in Karnataka, most famous for its vegetarian cuisine and South Indian restaurants all over the country. With beautifully carved ancient temples, laidback beaches and unexplored forests, Udupi is also the place where the educational hub of Manipal is located."
    }
  ],
  "Tamil Nadu": [
    {
      name: "Rameshwaram",
      description:
        "Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka."
    },
    {
      name: "Ooty",
      description:
        "Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway."
    },
    {
      name: "Kodaikanal",
      description:
        "Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway."
    },
    {
      name: "Mahabalipuram",
      description:
        "Famous for its intricately carved temples and rock-cut caves, Mamallapuram or Mahabalipuram as it is famously known, is a historically important and well-loved tourist location situated on the Coromandel Coast along the Bay of Bengal, in the state of Tamil Nadu."
    },
    {
      name: "Kanyakumari",
      description:
        "Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin."
    }
  ]
};

export default function App() {
  const [visitPlaces, setVisitPlaces] = useState("Maharashtra");

  function stateChangeHandler(state) {
    // var cities = places[state];
    setVisitPlaces(state);
  }

  return (
    <div className="App">
      <h1>
        Best places to visit
        <span role="img" aria-label={"0x1F60A"}>
          🚀
        </span>
      </h1>
      <h2>Start exploring to see some magic happen!</h2>
      {Object.keys(places).map((state) => {
        return (
          <li
            className="states"
            key={state}
            onClick={() => stateChangeHandler(state)}
            style={{
              backgroundColor: visitPlaces === state ? "#fdba74" : "transparent"
            }}
          >
            {state}
          </li>
        );
      })}
      <hr />
      {places[visitPlaces].map((place) => {
        return (
          <div key={place["name"]}>
            <li className="visitPlaces">
              <div className="placeName">
                <em>
                  <b> {place["name"]}</b>
                </em>
              </div>
              <div className="placeDescription">{place["description"]}</div>
            </li>
          </div>
        );
      })}
    </div>
  );
}
