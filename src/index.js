import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var pages = {
  start: {
    text: "Welcome, traveler! How would you like to get to your destination?",
    leftLabel: "Train",
    middleLabel: "Plane",
    rightLabel: "Ship",
    leftPage: "onthetrain",
    middlePage: "ontheplane",
    rightPage: "ontheship"
  },
  onthetrain: {
    text:
      "Welcome aboard the choo-choo train! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    middleLabel: "32K",
    rightLabel: "97C",
    leftPage: "death",
    middlePage: "comma",
    rightPage: "life",

    picture:
      "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/07/09/11/train-unsplash.jpg?w968"
  },
  ontheplane: {
    text:
      "Welcome aboard the shoo-shoo plane! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    middleLabel: "32K",
    rightLabel: "97C",
    leftPage: "death",
    middlePage: "comma",
    rightPage: "life",

    picture:
      "https://cdn.vox-cdn.com/thumbor/zNU1iD04vcXbaaPjj2J6Kqhv3SE=/0x0:1920x1440/1820x1213/filters:focal(807x567:1113x873):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64764864/Airbus_Bird_of_Prey_concept_plane.0.jpeg"
  },
  ontheship: {
    text:
      "Welcome aboard the whoo-whoo ship! Please make your way to your seat. What's the number?",
    leftLabel: "12E",
    middleLabel: "32K",
    rightLabel: "97C",
    leftPage: "death",
    middlePage: "comma",
    rightPage: "life",

    picture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Shipwreck_of_the_SS_American_Star_on_the_shore_of_Fuerteventura.jpg/640px-Shipwreck_of_the_SS_American_Star_on_the_shore_of_Fuerteventura.jpg"
  },
  death: {
    text: "You are dead..."
  },
  life: {
    text: "You are alive!"
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "start"
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    var pageData = pages[this.state.page];
    var imageElement = "";
    if (pageData.picture) {
      imageElement = (
        <img src={pageData.picture} height="100" alt="page photo" />
      );
    }
    return (
      <div className="App">
        <p>{pageData.text}</p>
        {imageElement}
        <button onClick={() => this.goToPage(pageData.leftPage)}>
          {pageData.leftLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.middlePage)}>
          {pageData.middleLabel}
        </button>
        <button onClick={() => this.goToPage(pageData.rightPage)}>
          {pageData.rightLabel}
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
