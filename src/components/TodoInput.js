import { useState } from "react";

const TodoInput = (props) => {
  const [inputText, setInputText] = useState("");

  //   const handleKeyDown = (event) => {
  //     if (event.key === "Enter") {
  //       props.addList(inputText);
  //       setInputText("");
  //     }
  //   };

  return (
    <div className="input-container">
      <input
        className="input-box-todo"
        placeholder="Enter your todo Item"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.addList(inputText);
            setInputText("");
          }
        }}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default TodoInput;
