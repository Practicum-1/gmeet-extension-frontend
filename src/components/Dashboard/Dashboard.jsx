import React from "react";
import "./Dashboard.scss";

var url = "";
chrome.tabs.query(
  {
    active: true,
    url: "https://meet.google.com/*",
  },
  (tabs) => {
    url = tabs[0].url;
  }
);

const Dashboard = ({ polls, socket }) => {
  return (
    <div className="dashboard">
      dashboard
      <br></br>
      <ul>
        {polls.map((poll) => {
          return <li> {JSON.stringify(poll)} </li>;
        })}
      </ul>
    </div>
  );
};

export default Dashboard;
