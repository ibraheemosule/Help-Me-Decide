import React from "react";

import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

export default class IndecisionApp extends React.Component {
  state = {
    theOptions: this.props.theOptions,
    selectedOption: undefined,
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) this.setState(() => ({ theOptions: options }));
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theOptions.length !== this.state.theOptions.length) {
      const json = JSON.stringify(this.state.theOptions);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    console.log("are you okay");
  }

  handleDeleteAll = () => {
    this.setState(() => ({ theOptions: [] }));
  };

  handleDeleteOne = (optionToRemove) => {
    this.setState((prevState) => ({
      theOptions: prevState.theOptions.filter(
        (option) => option !== optionToRemove
      ),
    }));
  };

  handleRandom = () => {
    let random = Math.floor(Math.random() * this.state.theOptions.length);
    let option = this.state.theOptions[random];
    this.setState(() => ({
      selectedOption: option,
    }));
  };
  clearModal = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid option to add to the list";
    } else if (this.state.theOptions.indexOf(option) > -1) {
      return "this option already exists";
    }
    this.setState((prevState) => ({
      theOptions: prevState.theOptions.concat(option),
    }));
  };

  render() {
    const subtitle =
      "Save your upcoming tasks here and let your system decide what you should do next";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.theOptions.length > 0}
            handleRandom={this.handleRandom}
          />
          <div className="widget">
            <Options
              options={this.state.theOptions}
              handleDeleteAll={this.handleDeleteAll}
              handleDeleteOne={this.handleDeleteOne}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          optionModal={this.state.selectedOption}
          clearModal={this.clearModal}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  theOptions: [],
};
