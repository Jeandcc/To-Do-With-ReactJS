import React from "react";

class Input extends React.Component {
  onKeyPress = event => {
    if (event.key === "Enter") {
      document.getElementById("SubmitTask").click();
    }
  };

  render() {
    const { value, onChange, onClick } = this.props;
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
            onKeyPress={this.onKeyPress}
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
}

export default Input;
