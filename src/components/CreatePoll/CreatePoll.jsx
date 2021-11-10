import React from "react";
import { Socket } from "socket.io";
import "./CreatePoll.scss";

const CreatePoll = ({ socket, roomName }) => {
  const sendPoll = () => {
    socket.emit("insertPoll", roomName, {
      text: "Polling Question",
      total_votes: 0,
      options: [
        { option: "option A", votes: [] },
        { option: "option B", votes: [] },
      ],
      createdBy: socket.id,
      createdAt: Date.now(),
    });
  };
  return (
    <div className="create-poll">
      create-poll
      <button
        onClick={() => {
          sendPoll();
        }}
      >
        Send Poll
      </button>
    </div>
  );
};

export default CreatePoll;
