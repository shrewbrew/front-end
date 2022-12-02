import React, { useRef } from "react";
import Button from "../components/elements/Button";

const Login = () => {
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleSubmit = () => {
    let details = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };

    fetch("", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: details,
    })
      .then((r) => r.json())
      .then((res) => {
        if (res) {
          this.setState({ message: "New details Created Successfully" });
        }
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" placeholde="Enter Email" ref={inputEmail}></input>
      <label>Password</label>
      <input
        type="password"
        placeholde="Enter Password"
        ref={inputPassword}
      ></input>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Login;
