import React from "react";
import "./Dashboard.scss";

var url = "";
chrome.tabs.query(
  {
    active: true,
    url: "https://meet.google.com/*",
  },
  (tabs) => {
    console.log(tabs);
    url = tabs[0].url;
  }
);

const Dashboard = ({ roomInfo }) => {
  return (
    <div className="dashboard">
      {roomInfo.map((user) => (
        <li>{user}</li>
      ))}
    </div>
  );
};

export default Dashboard;
