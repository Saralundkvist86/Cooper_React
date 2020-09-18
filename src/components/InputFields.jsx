import React from "react";
import { Form } from "semantic-ui-react";
const InputFields = ({ onChangeHandler }) => {
  return (
    <>
    <Form>
    <Form.Group widths='equal'>
      <Form.Field>
      <label>Distance</label>
      <input onChange={onChangeHandler} name="distance" id="distance"></input>
      </Form.Field>
      <Form.Field style={{marginTop: '1.5em'}}>
      <select onChange={onChangeHandler} name="gender" id="gender">
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
      </Form.Field>
      <Form.Field>
      <label>Age</label>
      <input onChange={onChangeHandler} name="age" id="age"></input>
      </Form.Field>
      </Form.Group>
      </Form>
    </>
  );
};

export default InputFields;