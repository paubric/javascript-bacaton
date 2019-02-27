import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Markdown from "react-remarkable";

class Flashcard extends Component {
  state = {
    bacData: require("../bac.json"),
    isVisible: false
  };

  getRandomData() {
    // Get number of items
    const bacDataLength = this.state.bacData["opere"].length;

    // Get random item index
    const itemIndex = Math.floor(Math.random() * bacDataLength);

    // Get item name
    const itemName = this.state.bacData["opere"][itemIndex]["nume"];

    // Get keys of item and number of keys
    const keys = Object.keys(this.state.bacData["opere"][itemIndex]);
    const keysLength = keys.length;

    // Get random key index
    const keyIndex = Math.floor(Math.random() * keysLength); //keysLength - 1;

    // Get target text
    const text = this.state.bacData["opere"][itemIndex][keys[keyIndex]];

    this.state = {
      key: keys[keyIndex],
      value: text,
      name: itemName
    };
  }

  setVisible = () => {
    const state = this.state;
    state["isVisible"] = true;
    this.setState(state);
  };

  constructor() {
    super();
    this.getRandomData();
  }

  refresh() {
    window.location.reload();
  }

  render() {
    return (
      <>
        <h3>Nume: {this.state["name"]}</h3>
        <h3>Cerinta: {this.state["key"]}</h3>
        <Button onClick={this.setVisible}>Arata</Button>
        <Markdown source={this.state.isVisible && this.state["value"]} />
        <Button onClick={this.refresh}>Alta</Button>
      </>
    );
  }
}

export default Flashcard;
