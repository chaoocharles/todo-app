import React from "react";
import Task from "./Task";

const Tasks = () => {
  return (
    <>
      <table
        className="table table-dark container"
        style={{ marginTop: "30px" }}
      >
        <thead>
          <tr className="text-info">
            <th scope="col">Tasks</th>
            <th scope="col">Added On</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <Task />
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
