import React, { useState } from "react";
import { Socket } from "socket.io";
import "./CreatePoll.scss";

const CreatePoll = ({ socket, roomName }) => {
  const [numOfOption, setNumOfOption] = useState(0);
  const [pollingQuestion, setPollingQuestion] = useState();
  const [options, setOptions] = useState({});

  const sendPoll = () => {
    console.log("ujjwal", options);
    socket.emit("insertPoll", roomName, {
      text: pollingQuestion,
      total_votes: 0,
      // options: [
      //   { option: "option A", votes: [] },
      //   { option: "option B", votes: [] },
      // ],
      options,
      createdBy: socket.id,
      createdAt: Date.now(),
    });
  };

  const handleOption = async (e, i, selectedOption) => {
    let option = { ...options };
    option[i] = selectedOption;
    await setOptions(Object.values(option));
  };

  return (
    <div className="create-poll">
      <div className="heading">Start Poll</div>
      <div>
        <label>Your Question</label>
        <textarea
          className="form-control form-control-alternative text-dark"
          placeholder={`Enter your question`}
          rows="3"
          value={pollingQuestion}
          onChange={(e) => setPollingQuestion(e.target.value)}
        />
      </div>
      <div>
        <label>Number of options </label>
        <input
          className="form-control form-control-alternative"
          type="number"
          placeholder="Enter number of options"
          min={0}
          onChange={(e) => {
            setNumOfOption(parseInt(e.currentTarget.value, 10));
          }}
        ></input>
      </div>
      <div>
        {!!numOfOption &&
          [...Array(numOfOption)].map((el, index) => (
            <>
              <label>Option {index + 1}</label>
              <textarea
                id={index + 1}
                key={index}
                className="form-control form-control-alternative text-dark"
                placeholder={`Enter option ${index + 1}`}
                rows="2"
                onChange={(e) =>
                  handleOption(e, index, {
                    option: e.target.value,
                    votes: [],
                  })
                }
              />
            </>
          ))}
      </div>
      {numOfOption > 0 && (
        <button
          className="accept"
          onClick={() => {
            sendPoll();
          }}
        >
          Create
        </button>
      )}
    </div>
  );
};

export default CreatePoll;
