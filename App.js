import React, { Component } from "react";

class App extends Component {
  state = {
    nameInput: "",
    lastName: "",
    job: "",
    userList: [],
  };

  handleChangeInputs = (event) => {
    console.log(event.target);
  };
  handleChangeInput = (e) => {
    this.setState({ nameInput: e.target.value });
  };
  handleChangeLast = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleChangeJob = (e) => {
    this.setState({ job: e.target.value });
  };

  handleSubmit = (event) => {
    if (this.state.nameInput.trim() === "") {
      alert("Please enter a name");
      return;
    }
    event.preventDefault();
    // const newArray = this.state.userList.push(this.state.nameInput);
    // this.setState(newArray);
    this.setState((prev) => ({
      userList: [...prev.userList, this.state.nameInput],
    }));
    this.setState({ nameInput: "" });
  };

  render() {
    const { nameInput, userList, lastName, job } = this.state;
    console.log(this.state);

    return (
      <div style={{ textAlign: "center", marginTop: "100px", color: "red" }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              id="1"
              value={nameInput}
              onChange={this.handleChangeInputs}
            />
            <input id="2" value={lastName} onChange={this.handleChangeInputs} />
            <input id="3" value={job} onChange={this.handleChangeInputs} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div />
        <section>
          <ul>
            <li>{nameInput}</li>
            <li>{lastName}</li>
            <li>{job}</li>
            <List list={userList} />
          </ul>
        </section>
      </div>
    );
  }
}

class List extends Component {
  render() {
    return this.props.list.length ? (
      this.props.list.map((item, index) => <li key={index}>{item}</li>)
    ) : (
      <h3>No data...</h3>
    );
  }
}

export default App;
