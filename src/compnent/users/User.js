import React, { Component } from "react";
import Table from "./Table";
import UserForm from "./UserForm";

export class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedUser: {},
      operations: "Add",
    };
  }

  componentDidMount() {
    console.log("hello");
    this.setState({
      users: [
        { Id: 1, Name: "Ashwini" },
        { Id: 2, Name: "Kajal" },
      ],
    });
  }
  add = (obj) => {
    console.log(obj);
    this.setState({
      users: [...this.state.users, obj],
    });
  };
  delete = (obj) => {
    let id = obj.Id;
    let result = this.state.users.filter((el) => el.Id !== id);
    console.log(result);
    this.setState({
      users: [...result],
    });
  };
  edit = (obj) => {
    this.setState({ selectedUser: obj, operations: "Update" });
  };
  update = (obj) => {
    let Id = obj.Id;
    let Name = obj.Name;
    console.log("In update", obj);
    let result = this.state.users.map((el) => {
      if (el.Id == Id) {
        console.log("hello");
        el.Id = Id;
        el.Name = Name;
      }
      return el;
    });
    console.log(result);
    this.setState({
      users: [...result],
      operations: "Add",
    });
  };

  render() {
    const { users, selectedUser, operations } = this.state;

    console.log(users, "render");
    return (
      <div>
        <UserForm
          handleAdd={(obj) => this.add(obj)}
          selectedUser={selectedUser}
          operations={operations}
          handleUpdate={(obj) => this.update(obj)}
        />
        <Table
          users={users}
          handleDelete={(obj) => this.delete(obj)}
          handleEdit={(obj) => this.edit(obj)}
        />
      </div>
    );
  }
}

export default User;
