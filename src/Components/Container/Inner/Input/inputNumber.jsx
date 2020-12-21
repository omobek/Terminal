import React, { Component } from "react";
import mod from  "./inputNumber.module.css";
import Button from "./InputComponents/Button";
import Input from "./InputComponents/Input";
import ClearButton from "./InputComponents/ClearButton";

class InputNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  addToInput = val => {

      this.setState({input: this.state.input + val});
  };
  addZeroToInput = val => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  backSpace = (val) => {
    this.setState({ input: this.state.input + val });
  };

  render() {
    return (
      <div className={mod.inputNumber}>
        <div className={mod.calc_wrapper}>
          <div className={mod.row}>
            <Input>{this.state.input}</Input>
          </div>
          <div className={mod.row}>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
          </div>
          <div className={mod.row}>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
          </div>
          <div className={mod.row}>
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
            <Button handleClick={this.backSpace}>Backspace</Button>

          </div>

        </div>
      </div>
    );
  }
}

export default InputNumber;