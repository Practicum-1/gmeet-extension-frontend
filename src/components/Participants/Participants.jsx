import React from "react";
import { socket } from "../../customHooks/useSockets";
import "./Participants.scss";

const Participants = ({ participants }) => {
  console.log(participants);
  return (
    <>
      <div className="list-wrapper">
        <div className="heading pt-3">Participants</div>
        <ul className="list">
          {participants.map((participant, index) => {
            return (
              <li className="list-item" key={index}>
                <div>
                  <i className="fas fa-user list-item-image" />
                </div>
                <div className="list-item-content">
                  <h4>
                    {" "}
                    {participant.displayName}{" "}
                    {participant.user_id === socket.id ? ` (You)` : ``}
                  </h4>
                  {/* <p>@hk-skit</p> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="participants">
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
    </div> */}
    </>
  );
};

export default Participants;
