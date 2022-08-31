import React, { useState } from "react";
import { Link } from "react-router-dom";

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="container">
      <div className="row mt-5 py-2">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1 className="fs-1 text-center  p-2">Welcome to chat App</h1>
          <form method="post">
            <div className="mb-3">
              
              <input
                type="text"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="mb-3">
              
              <input
                type="text"
                className="form-control"
                onChange={(e) => setRoom(e.target.value)}
                placeholder="Enter your chat Romm Name"
              />
            </div>
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/home?name=${name}&room=${room}`}
            >
              <input
                type="submit"
                className="btn btn-success w-100"
                value="Join"
              />
            </Link>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Chat;
