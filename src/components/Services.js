import React, { Component } from "react";
import {
  FaCocktail,
  FaHiking,
  FaShuttleVan,
  FaBeer,
  FaDove,
  FaDragon,
  FaGlassCheers,
} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaGlassCheers />,
        title: "Rent Your Way",
        info:
          "Use Roomi if you’re looking for a new BFF to live with or just need someone to move in and split rent. Find someone to rent an empty room – whether it’s for 3 months or a whole year!",
      },
      {
        icon: <FaDove />,
        title: "Sublet Safely",
        info:
          "Know who you’re renting to by asking potential roommates to complete a background check before they apply to your listing.",
      },
      {
        icon: <FaDragon />,
        title: "Rent Easier",
        info:
          "Easily review booking requests from interested renters. Once you approve their request to book your room, we’ll take your listing off the market and set up secure payment.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="our offerings" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
