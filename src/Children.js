import React from "react";
import "./style.css";

export default function Children(props) {
  return (
    <div>
      
      <p>Render Props</p>
      {props.render()}
    </div>
  );
}
