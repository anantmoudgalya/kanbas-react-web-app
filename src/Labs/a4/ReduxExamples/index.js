import React from "react";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import AddRedux from "./AddRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <br />
      <HelloRedux />
      <br />
      <CounterRedux />
      <br />
      <AddRedux />
    </div>
  );
};

export default ReduxExamples;
