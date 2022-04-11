import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
   
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLowClick = () => {
   
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleOnChange = (event) => {
    
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been removed", "success");
  };

  const clearText = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text has been cleared", "success");
  };

  return (
    <div>
     
      <div>
        <h1 className="my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>
          Clear Text
        </button>

        <div className="container my-3">
          <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            Your text summary
          </h2>
          <p style={{ color: props.mode === "dark" ? "#fd0d96" : "black" }}>
            {" "}
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words, {text.length} characters
          </p>
          <p style={{ color: props.mode === "dark" ? "#fd0d96" : "black" }}>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            Mins to Read
          </p>
          <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
            Preview
          </h3>
          <p style={{ color: props.mode === "dark" ? "#fd0d96" : "black" }}>
            {text.length > 0 ? text : "Nothing to preview"}
          </p>
        </div>
      </div>
    </div>
  );
}
