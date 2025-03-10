import React from "react";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <>
      <button
        style={styles}
        aria-label={`Die with value ${props.value}, ${
          props.isHeld ? "Held" : "Not Held"
        }`}
        aria-pressed={props.isHeld}
        onClick={props.hold}
      >
        {props.value}
      </button>
    </>
  );
}

export default Die;
