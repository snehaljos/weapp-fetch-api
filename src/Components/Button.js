import React from "react";

function Button({ onClick, count }) {
  return (
    <button
      className="btn btn-primary "
      style={{ padding: "20000" }}
      onClick={onClick}
    >
      Cliked {count} times enjoy
    </button>
  );
}

export default Button;
