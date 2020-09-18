import React from "react";
import { Form } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Form>
    <form onSubmit={submitFormHandler} id="login-form">
      <label>Email</label>
      <input name="email" type="email" id="email"></input>

      <label>Password</label>
      <input name="password" type="password" id="password"></input>

      <button id="submit">Submit</button>
    </form>
    </Form>
  );
};

export default LoginForm;
