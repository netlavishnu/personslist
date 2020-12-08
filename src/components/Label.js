import React, { Component } from "react";

export default class Persons extends Component {
  state = {
    personsList: [
      { name: "vijay", fathername: "Ramachandra", age: 22, Gender: "male" },
      { name: "vishnu", fathername: "Jagan", age: 23, Gender: "male" },
      { name: "ramu", fathername: "Keshava", age: 21, Gender: "male" },
    ],
    data: { name: "", fathername: "", age: "", Gender: "" },
    currentId: "",
    errors: {
      name: "",
      fathername: "",
      age: "",
      Gender: "",
    },
  };

  nameInput = (e) => {
    this.setState({
      data: { ...this.state.data, name: e.target.value },
      errors: { ...this.state.errors, name: false },
    });
  };
  fathernameInput = (e) => {
    this.setState({
      data: { ...this.state.data, fathername: e.target.value },
      errors: { ...this.state.errors, fathername: false },
    });
  };

  ageInput = (e) => {
    this.setState({
      data: { ...this.state.data, age: e.target.value },
      errors: { ...this.state.errors, age: false },
    });
  };
  genderInput = (e) => {
    this.setState({
      data: { ...this.state.data, Gender: e.target.value },
      errors: { ...this.state.errors, Gender: false },
    });
  };

  validate = () => {
    this.setState({
      errors: {
        name: this.state.data.name == "",
        fathername: this.state.data.fathername == "",
        age: this.state.data.age == "",
        Gender: this.state.data.Gender == "",
      },
    });
    return (
      this.state.data.name !== "" &&
      this.state.data.fathername !== "" &&
      this.state.data.age !== "" &&
      this.state.data.Gender !== ""
    );
  };

  Submit = (e) => {
    e.preventDefault();

    // const newPerson = {
    //   name: this.state.name,
    //   fathername: this.state.fathername,
    //   age: this.state.age,
    //   Gender: this.state.Gender,
    // };

    if (this.validate())
      if (this.state.currentId == "") {
        console.log(this.state.value);

        this.setState({
          personsList: [...this.state.personsList, this.state.data],
          data: {
            name: "",
            fathername: "",
            age: "",
            Gender: "",
          },
        });
      } else {
        const newPersons = this.state.personsList.map((person, i) => {
          if (i == this.state.currentId) {
            return this.state.data;
          } else {
            return person;
          }
        });
        this.setState({
          personsList: newPersons,
          currentId: "",
          data: {
            name: "",
            fathername: "",
            age: "",
            Gender: "",
          },
        });
      }
  };
  edit = (e) => {
    e.preventDefault();
    this.setState({
      currentId: e.target.id,
      data: {
        name: this.state.personsList[e.target.id].name,
        fathername: this.state.personsList[e.target.id].fathername,
        age: this.state.personsList[e.target.id].age,
        Gender: this.state.personsList[e.target.id].Gender,
      },
    });
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
              value={this.state.data.name}
              onChange={this.nameInput}
            ></input>
            <p className="error">
              {this.state.errors.name ? "cant be blank" : ""}{" "}
            </p>
            <label>fathername:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter name"
              value={this.state.data.fathername}
              onChange={this.fathernameInput}
            ></input>
            <p className="error">
              {this.state.errors.fathername ? "cant be blank" : ""}{" "}
            </p>
            <label>age:</label>
            <input
              type="number"
              class="form-control"
              placeholder="Enter age"
              value={this.state.data.age}
              onChange={this.ageInput}
            ></input>
            <p className="error">
              {this.state.errors.age ? "cant be blank" : ""}{" "}
            </p>
            <label>Gender:</label>
            <div>
              <input
                type="radio"
                name="radio"
                onClick={this.genderInput}
                value="male"
                checked={this.state.data.Gender === "male"}
              />
              <label>male</label>
            </div>
            <div>
              <input
                type="radio"
                name="radio"
                onClick={this.genderInput}
                value="female"
                checked={this.state.data.Gender === "female"}
              />
              <label>female</label>
              <p className="error">
                {this.state.errors.Gender ? "cant be blank" : ""}{" "}
              </p>
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
                <th>Edit</th>
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
                    <button id={i} onClick={this.edit} className="red">
                      Edit
                    </button>
                  </td>
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
