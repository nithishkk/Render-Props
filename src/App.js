import React from "react";
import "./style.css";
import Children from './Children'
export default function App() {
  return (
    <div>
      <Children 
      render={()=> <h1> this is Render Props </h1>}
      />
       <Children 
      render={()=> <p> this is Render Props from nithish </p>}
      />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
