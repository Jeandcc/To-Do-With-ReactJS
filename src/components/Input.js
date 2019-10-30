import React from "react";

function Input({ value, onChange, onClick }) {
  function onKeyPress(event) {
    if (event.key === "Enter") {
      document.getElementById("SubmitTask").click();
    }
  }
  return (
    <>
      <div className="add-item-wrapper">
        <input
          type="text"
          className="to-do-input w-input"
          maxLength="256"
          name="New"
          data-name="New"
          placeholder="New Task"
          id="NewTask"
          required=""
          value={value}
          onChange={onChange}
          onKeyPress={() => onKeyPress(event)}
        />
        <a
          href="#"
          id="SubmitTask"
          className="button w-button"
          onClick={onClick}
        >
          +
        </a>
      </div>
    </>
  );
}

export default Input;
