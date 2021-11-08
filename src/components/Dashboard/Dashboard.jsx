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

const Dashboard = () => {
  return <div className="dashboard">dashboard</div>;
};

export default Dashboard;
