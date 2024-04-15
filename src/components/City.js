import React from "react";
import potemkin from "../assets/images/potemkin-stairs.jpg";
import opera from "../assets/images/odessa-opera.jpg";
import richelieu from "../assets/images/duke-de-richelieu.jpg";
import './City.css';

class City extends React.Component {
  cityData = {
    name: "Odessa",
    country: "Ukraine",
    foundationYear: 1794,
    area: 160,
    population: 1000000,
    landmarks: [
        { name: "Potemkin Stairs", image: potemkin },
        { name: "Odessa Opera and Ballet Theater", image: opera },
        { name: "Duke de Richelieu Monument", image: richelieu },
    ],
  };

  render() {
    return (
      <section className="city-container">
        <h1 className="city-name">{this.cityData.name}</h1>
        <p className="city-info">Country: {this.cityData.country}</p>
        <p className="city-info">Foundation year: {this.cityData.foundationYear}</p>
        <p className="city-info">Area: {this.cityData.area}  km²</p>
        <p className="city-info">Population: {this.cityData.population}</p>
        <h2>Landmarks:</h2>
        <div className="landmarks">
            {this.cityData.landmarks.map((landmark, index) => (
                <div className="city-landmark" key={index}>
                    <h3>{landmark.name}</h3>
                    <img src={landmark.image} alt={landmark.name}/>
                </div>
            ))}
        </div>
      </section>
    );
  }
}

export default City;