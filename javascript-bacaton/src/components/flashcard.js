import React, { Component } from "react";
import Markdown from "react-remarkable";

class Flashcard extends Component {
  state = {
    bacData: require("../bac.json"),
    key: "",
    value: ""
  };

  getRandomData() {
    // Get number of items
    const bacDataLength = this.state.bacData["opere"].length;

    // Get random item index
    const itemIndex = Math.floor(Math.random() * bacDataLength);

    // Get keys of item and number of keys
    const keys = Object.keys(this.state.bacData["opere"][itemIndex]);
    const keysLength = keys.length;

    // Get random key index
    const keyIndex = Math.floor(Math.random() * keysLength);

    // Get target text
    const text = this.state.bacData["opere"][itemIndex][keys[keyIndex]];

    this.state = {
      bacData: require("../bac.json"),
      key: keys[keyIndex],
      value: text
    };
  }

  constructor() {
    super();
    this.getRandomData();
  }

  render() {
    return (
      <>
        <Markdown source={this.state["key"]} />
        <Markdown source={this.state["value"]} />
      </>
    );
  }
}

export default Flashcard;
