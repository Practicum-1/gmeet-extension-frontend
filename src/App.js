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
  const [participants, setParticipants] = useState([]);
  const [polls, setPolls] = useState([]);
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    socket.on("connect", function () {
      console.log("You are now connected  ");
    });
  }, []);

  socket.on("roomInfo", (data) => {
    setParticipants(data.participants);
    setRoomName(data.roomName);
    setPolls(data.polls);
    if (page === 0) {
      setPage(1);
    }
  });

  socket.on("pollAdded", (data) => {
    console.log("pole received", data);
    setPolls(data);
  });

  return (
    <div className="App">
      <Sidebar page={page} setPage={setPage} off={page} />
      {page === 0 ? <Homepage socket={socket} /> : ""}
      {page === 1 ? (
        <Dashboard polls={polls} participants={participants} socket={socket} />
      ) : (
        ""
      )}
      {page === 2 ? <CreatePoll socket={socket} roomName={roomName} /> : ""}
      {page === 3 ? (
        <Participants participants={participants} socket={socket} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
