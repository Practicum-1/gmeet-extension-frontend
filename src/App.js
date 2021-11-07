import "./App.scss";
import React, { useEffect, useState } from "react";
import useSendMessage from "./customHooks/useSendMessage";
import Homepage from "./components/Homepage/Homepage";
import { socket } from "./customHooks/useSockets";
import Dashboard from "./components/Dashboard/Dashboard";

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

function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    socket.on("connect", function () {
      console.log("You are now connected  ");
    });
  }, []);

  const [roomInfo, setRoomInfo] = useState({});

  socket.on("roomInfo", (data) => {
    setRoomInfo(data);
    if (page === 0) {
      setPage(1);
    }
  });

  return (
    <div className="App">
      {page === 0 ? <Homepage socket={socket} /> : ""}
      {page === 1 ? <Dashboard roomInfo={roomInfo} socket={socket} /> : ""}
    </div>
  );
}

export default App;
