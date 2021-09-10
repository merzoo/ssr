import React, { useState } from "react";
import { connect } from "react-redux";
import actions from "../../store/actions/counter";

const Counter = ({ number, increment }) => {
  return (
    <div>
      <h3>Counter</h3>
      <p>count:{number}</p>
      <p>
        <button onClick={increment}>+1</button>
      </p>
    </div>
  );
};

export default connect((state) => state.counter, actions)(Counter);
