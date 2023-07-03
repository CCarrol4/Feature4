import React, { useState, useEffect } from "react";
import { getAllLessons } from "../../Common/Services/LearnService";
import MainList from "./MainList";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const Main = () => {
  // Variables in the state to hold data
  const [lessons, setLessons] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllLessons().then((lessons) => {
      console.log(lessons);
      setLessons(lessons);
    });
  }, []);

  return (
    <div>
      This is the main stateful parent component.
      <MainList lessons={lessons} />
    </div>
  );
};

export default Main;
