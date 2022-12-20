import React from "react";

function Login() {
  const userSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div id="close-modal">
        <button id="close-modal-X" disabled>
          X
        </button>
      </div>
      <form>
        <label for="userName">User Name</label>
        <input
          type="text"
          id="userName"
          name="userName"
          placeholder="User McUser"
          required
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="******"
          required
        />
        <button for="submit" onSubmit={userSubmit}>
          Submit
        </button>
        <button type="button">Decline</button>
      </form>
    </div>
  );
}

export default Login;
