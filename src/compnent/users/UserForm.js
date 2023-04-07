import React, { Component } from "react";

export class UserForm extends Component {
  constructor() {
    super();
    this.Id = React.createRef();
    this.Name = React.createRef();
  }
  add = () => {
    let Id = this.Id.current.value;
    let Name = this.Name.current.value;
    let obj = {
      Id: Id,
      Name: Name,
    };
    if (this.props.operations === "Add") {
      console.log(obj, "UserForm");
      this.props.handleAdd(obj);
      console.log(Id, Name);
      this.Id.current.value = "";
      this.Name.current.value = "";
    }
    if (this.props.operations === "Update") {
      this.props.handleUpdate(obj);
      this.Id.current.value = "";
      this.Name.current.value = "";
    }
  };

  render() {
    const { selectedUser, operations } = this.props;
    const { Id, Name } = selectedUser;
    if (operations === "Update") {
      this.Id.current.value = Id;
      this.Name.current.value = Name;
    }

    return (
      <div className="container">
        <div className="form-group mb-3">
          <label>Id</label>
          <input
            type="number"
            className="form-control"
            id="exampleInputId"
            placeholder="Enter Id"
            ref={this.Id}
          />
        </div>

        <div className="form-group mb-3">
          <label>User Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            placeholder="Enter User Name"
            ref={this.Name}
          />
          <small id="nameHelp" className="form-text text-muted"></small>
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={() => this.add()}
        >
          {operations}
        </button>
      </div>
    );
  }
}

export default UserForm;
