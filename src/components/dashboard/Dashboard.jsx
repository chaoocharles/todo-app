import React from "react";
import AddTask from "../tasks/AddTask";
import Tasks from "../tasks/Tasks";

const Dashboard = () => {
  return (
    <>
      <AddTask />
      <Tasks />
    </>
  );
};

export default Dashboard;
