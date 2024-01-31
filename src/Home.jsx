import React from "react";

function Home({ dispatch }) {
  return (
    <div>
      <h3>Home</h3>
      <button
        onClick={() => {
          dispatch({ screen: "FEATURES" });
        }}
      >
        FEATURES
      </button>
    </div>
  );
}

export default Home;
