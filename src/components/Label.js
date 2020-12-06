import React, { Component } from "react";
export default class Persons extends Component {
  state = {
    personsList: [
      { name: "vijay", fathername: "Ramachandra", age: 22, Gender: "male" },
      { name: "vishnu", fathername: "Jagan", age: 23, Gender: "male" },
      { name: "ramu", fathername: "Keshava", age: 21, Gender: "male" },
    ],
    name: "",
    fathername: "",
    age: "",
    Gender: "",
    delete: "",
  };

  nameInput = (e) => {
    this.setState({ name: e.target.value });
  };
  fathernameInput = (e) => {
    this.setState({ fathername: e.target.value });
  };

  ageInput = (e) => {
    this.setState({ age: e.target.value });
  };
  genderInput = (e) => {
    this.setState({ Gender: e.target.value });
  };

  Submit = (e) => {
    e.preventDefault();
    if (
      this.state.name !== "" &&
      this.state.fathername !== "" &&
      this.state.age !== "" &&
      this.state.Gender !== ""
    ) {
      if (this.state.value === "") {
        console.log("please enter fields");
      } else {
        console.log(this.state.value);
        this.setState({
          personsList: [
            ...this.state.personsList,
            {
              name: this.state.name,
              fathername: this.state.fathername,
              age: this.state.age,
              Gender: this.state.Gender,
              delete: this.state.delete,
            },
          ],
        });
        this.setState({ name: "", fathername: "", age: "", Gender: "" });
      }
    } else {
      alert("enter all fields");
    }
  };
  delete = (e) => {
    console.log(e.target.id);
    this.setState({
      personsList: this.state.personsList.filter(
        (person, i) => i != e.target.id
      ),
    });
  };
  render() {
    return (
      <div>
        <div>
          <form class="form-group">
            <label for="exampleInputName">name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.nameInput}
            ></input>
            <label>fathername:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
              value={this.state.fathername}
              onChange={this.fathernameInput}
            ></input>

            <label>age:</label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter age"
              value={this.state.age}
              onChange={this.ageInput}
            ></input>
            <label>Gender:</label>
            <div>
              <input
                type="radio"
                name="radio"
                onClick={this.genderInput}
                value="male"
                checked={this.state.Gender === "male"}
              />
              <label>male</label>
            </div>
            <div>
              <input
                type="radio"
                name="radio"
                onClick={this.genderInput}
                value="female"
                checked={this.state.Gender === "female"}
              />
              <label>female</label>
            </div>
            <button className="btn btn-success" onClick={this.Submit}>
              Submit
            </button>
          </form>
        </div>

        <div>
          <table class="table table-dark">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Father Name</th>
                <th>age</th>
                <th>Gender</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.personsList.map((p, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.fathername}</td>
                  <td>{p.age}</td>
                  <td>{p.Gender}</td>
                  <td>
                    <button id={i} onClick={this.delete} className="red">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
