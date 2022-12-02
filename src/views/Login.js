import React from "react";
import Button from "../components/elements/Button";

const Login = () => {
  const handleSubmit = (event) => {
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    event.preventDefault()
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Email</label>
      <input type="email" placeholde="Enter Email" name="email"></input>
      <label>Password</label>
      <input
        type="password"
        placeholde="Enter Password"
        name="password"
      ></input>
      <Button color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default Login;
