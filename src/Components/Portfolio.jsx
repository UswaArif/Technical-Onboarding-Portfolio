/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pic2.jpg";

const imageAltText = "portfolio image.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Coffee Landing Scape Website 🎉",
    description:
      "Created a captivating coffee landscape website that takes people on a virtual journey into the world of coffee with beautiful pictures, warm colors, and interesting stories.",
    url: "https://github.com/UswaArif/OIBSIP/tree/main/%F0%9D%92%90%F0%9D%92%8A%F0%9D%92%83%F0%9D%92%94%F0%9D%92%8A%F0%9D%92%91_%F0%9D%92%95%F0%9D%92%82%F0%9D%92%94%F0%9D%92%8C%F0%9D%92%8F%F0%9D%92%901",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Craft a personal portfolio website to showcase your skills, experience, and accomplishments in a professional way.",
    url: "https://github.com/UswaArif/OIBSIP/tree/main/%F0%9D%92%90%F0%9D%92%8A%F0%9D%92%83%F0%9D%92%94%F0%9D%92%8A%F0%9D%92%91_%F0%9D%92%95%F0%9D%92%82%F0%9D%92%94%F0%9D%92%8C%F0%9D%92%8F%F0%9D%92%902",
  },
  {
    title: "Temperature Converter Website",
    description:
      "Build a user-friendly temperature converter website for quick and easy temperature unit conversions, making it convenient for users to switch between Celsius, Fahrenheit.",
    url: "https://github.com/UswaArif/OIBSIP/tree/main/%F0%9D%92%90%F0%9D%92%8A%F0%9D%92%83%F0%9D%92%94%F0%9D%92%8A%F0%9D%92%91_%F0%9D%92%95%F0%9D%92%82%F0%9D%92%94%F0%9D%92%8C%F0%9D%92%8F%F0%9D%92%903",
  },
  {
    title: "Tea Distribution desktop application",
    description:
      "Develop a desktop application for your tea distribution company to streamline inventory management, order processing, and customer interactions.",
    url: "https://github.com/UswaArif/Tea-Distribution-Company",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
