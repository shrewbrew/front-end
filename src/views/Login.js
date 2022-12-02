import React, { useRef, useState } from "react";
import Button from "../components/elements/Button";

const Login = () => {
  let [message, setMessage] = useState("You");
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleSubmit = (e) => {
    let details = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    };
    e.preventDefault();
    console.log(details);
    fetch("https://localhost:7226/api/values?email=xyz@gmail.com", {
      method: "GET",
    })
      .then((r) => r.json())
      .then((res) => {
        if (res) {
          setMessage("Details submitted successfully");
        }
      });

    // fetch("https://reqres.in/api/products/5")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setMessage(result.data.name);
    //     console.log(result);
    //   });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" placeholder="Enter Email" ref={inputEmail}></input>
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter Password"
        ref={inputPassword}
      ></input>
      <Button color="primary" type="submit">
        Submit
      </Button>
      {message}
    </form>
  );
};

export default Login;
