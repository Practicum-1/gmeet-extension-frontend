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
    <div className="dashboard ">
      <div className="heading pt-3">dashboard</div>
      <div className="all-question">
        {polls.map((poll) => (
          <>
            <div className="quiz-container" id="quiz">
              <div className="quiz-header">
                <h2 id="questions">{poll.text}</h2>
                <ul>
                  {poll.options.map((option, index) => (
                    <li>
                      <input
                        type="radio"
                        name={option.createdAt}
                        className="mx-2"
                      />
                      {option.option}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <button type="button" id="button">
                  Submit
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
