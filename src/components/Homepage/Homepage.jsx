import React, { useState } from "react";
import "./Homepage.scss";

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

const Homepage = ({ socket }) => {
  const [name, setName] = useState();
  const joinRoom = () => {
    // this event is sent to the background script to join the room and get the participants
    socket.emit(
      "joinRoom",
      url.substring(
        url.lastIndexOf("/") + 1,
        url.indexOf("?") === -1 ? url.length : url.indexOf("?")
      ),
      name
    );
  };

  return (
    <div className="homepage">
      <div className="content">
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          name="user_name"
          placeholder="Enter your name"
        />
        <button
          onClick={() => {
            joinRoom();
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
};

export default Homepage;
