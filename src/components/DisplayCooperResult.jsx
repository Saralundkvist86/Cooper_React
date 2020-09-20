import React from "react";
import cooperCalculator from "../modules/cooperCalculator";
import { saveData } from "../modules/performanceData";
import { Button } from "semantic-ui-react";

const DisplayCooperResult = ({
  distance,
  gender,
  age,
  authenticated,
  entrySaved,
  entryHandler,
}) => {
  const result = cooperCalculator(distance, gender, age);

  const propsPassed = distance && age ? true : false;

  return (
    <>
      {propsPassed && (
        <><div id="cooper-message">
          <h3>
            {age} year old {gender} running {distance} meters.
          </h3></div>
          <div id="cooper-result">
          <h1>Your Result: {result}</h1></div>
          {authenticated && !entrySaved ? (
            <Button
              basic
              color="green"
              id="save-result"
              onClick={() => saveData(result, age, distance, entryHandler)}
            >
              Save entry
            </Button>
          ) : (
            <>
            <p id="response-message">Remeber to save your data! </p>
            <p id="response-message">You can check your development curve by logging in and click<p id="green-text">show past entries</p> </p>
            
            </>
          )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;
