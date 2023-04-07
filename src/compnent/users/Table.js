import React, { Component } from "react";

export class Table extends Component {
  deleteUser = (obj) => {
    this.props.handleDelete(obj);
  };
  editUser = (obj) => {
    this.props.handleEdit(obj);
  };
  render() {
    const { users } = this.props;

    return (
      <div>
        <h2 className="form-group mb-3">Users List</h2>
        <div className="row"></div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> User Id</th>
                <th> User Name</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((users, i) => (
                <tr key={i}>
                  <td> {users.Id} </td>
                  <td> {users.Name} </td>

                  <td>
                    <button
                      onClick={() => this.editUser(users)}
                      className="btn btn-info"
                    >
                      Edit{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteUser(users)}
                      className="btn btn-danger"
                    >
                      Delete{" "}
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

export default Table;
