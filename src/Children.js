import React from "react";
import "./style.css";

export default function Children(props) {
  return (
    <div>
      {props.render()}
      {props.section("nithish is learning very fast")}
    </div>
  );
}
