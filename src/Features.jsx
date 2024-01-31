import React from "react";

function Features({ dispatch }) {
  return (
    <div>
      <h3>Features</h3>
      <button
        onClick={() => {
          dispatch({ screen: "PRICING" });
        }}
      >PRICING</button>
    </div>
  );
}

export default Features;
