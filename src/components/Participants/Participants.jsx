import React from "react";
import { socket } from "../../customHooks/useSockets";
import "./Participants.scss";

const Participants = ({ participants }) => {
  console.log(participants);
  return (
    <div className="participants">
      <h4>participants</h4>
      <ul>
        {participants.map((participant, index) => {
          return (
            <li key={index}>
              {participant.displayName}
              {participant.user_id === socket.id ? ` (You)` : ``}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Participants;
