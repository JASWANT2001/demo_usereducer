import React from "react";

function Pricing({ dispatch }) {
  return (
    <div>
      <h3> Pricing</h3>
      <button
        onClick={() => {
          dispatch({ screen: "HOME" });
        }}
      >Home</button>
    </div>
  );
}

export default Pricing;
