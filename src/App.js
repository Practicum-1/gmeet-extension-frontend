import "./App.scss";
import React, { useEffect, useState } from "react";
import useSendMessage from "./customHooks/useSendMessage";
import Homepage from "./components/Homepage/Homepage";
import { socket } from "./customHooks/useSockets";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import CreatePoll from "./components/CreatePoll/CreatePoll";
import Participants from "./components/Participants/Participants";

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

function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    socket.on("connect", function () {
      console.log("You are now connected  ");
    });
  }, []);

  const [roomInfo, setRoomInfo] = useState({ participants: [], polls: [] });

  socket.on("roomInfo", (data) => {
    setRoomInfo(data);
    if (page === 0) {
      setPage(1);
    }
  });

  return (
    <div className="App">
      <Sidebar page={page} setPage={setPage} off={page} />
      {page === 0 ? <Homepage socket={socket} /> : ""}
      {page === 1 ? <Dashboard roomInfo={roomInfo} socket={socket} /> : ""}
      {page === 2 ? <CreatePoll socket={socket} /> : ""}
      {page === 3 ? <Participants roomInfo={roomInfo} socket={socket} /> : ""}
    </div>
  );
}

export default App;
