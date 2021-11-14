import React from "react";
import { socket } from "../../customHooks/useSockets";
import "./Participants.scss";

const Participants = ({ participants }) => {
  console.log(participants);
  return (
    <>
      <div class="list-wrapper">
        <h4>participants</h4>
        <ul class="list">
          {participants.map((participant, index) => {
            return (
              <li class="list-item" key={index}>
                <div>
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/488320/profile/profile-80.jpg"
                    class="list-item-image"
                  />
                </div>
                <div class="list-item-content">
                  <h4>
                    {" "}
                    {participant.displayName}{" "}
                    {participant.user_id === socket.id ? ` (You)` : ``}
                  </h4>
                  <p>@hk-skit</p>
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
