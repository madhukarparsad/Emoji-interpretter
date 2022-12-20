import React, { useState } from "react";
import "./styles.css";
var emojiDic = {
  "🤓": "Nerd Face",
  "😎": "Sunglasses",
  "🥸": "disguised",
  "🤩": "Grinning ",
  "🥳": "Partying ",
  "🥱": " Yawning "
};
var emojiList = Object.keys(emojiDic);

var heading = "inside out";
// var color = "Yellow";
var styling = {
  backgroundColor:"red",
  marginLeft:"auto",
  marginRight:"auto",
  width:"20%",
  borderRadius:"2rem",
  padding:"1rem"
}
var sty = {
  backgroundColor:"yellow",
  width:"50%",
  padding:"5rem",
  borderRadius:"2rem",
  marginRight:"auto",
  marginLeft:"auto",
  
  
}
export default function App() {
  var [meaning, setMeaning] = useState("");

  function changeCatch(event) {
    var meaning = emojiDic[event.target.value];
    setMeaning(meaning);
    if (meaning === undefined) {
      setMeaning("this emoji is not in our library");
    }
  }
  function clickCatch(emoji) {
    var meaning = emojiDic[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <div style = {{padding:"5rem"}}>
      <div style={sty}>
      <h1 style={styling}>{heading}</h1>
      
      <input onChange={changeCatch}></input>
      <h2>{meaning}</h2>
      <h3>emoji we have</h3>
      {emojiList.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => clickCatch(emoji)}
            style={{ fontSize: "1.5rem", padding: "1rem", cursor: "pointer" ,backgroundColor:"red",borderRadius:"4rem"}}
          >
            {emoji}
          </span>
        );
      })}</div></div>
    </div>
  );
}