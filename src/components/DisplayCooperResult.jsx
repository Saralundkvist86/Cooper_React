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
        <>
          <h1 id="cooper-message">
            {age} year old {gender} running {distance} meters.
          </h1>
          <h3 id="cooper-result">Result: {result}</h3>
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
            <p id="response-message">Login to save your result</p>
          )}
        </>
      )}
    </>
  );
};

export default DisplayCooperResult;
