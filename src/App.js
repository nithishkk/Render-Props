import React from "react";
import "./style.css";
import Children from './Children'
export default function App() {
  return (
    <div>
      <Children 
      render={()=> <h1> this is Render Props </h1>}
      section={(name)=><p>nithish is best {name}</p>}
      />
       {/* <Children 
      render={()=> <p> this is Render Props from nithish </p>}
      /> */}
       {/* <Children 
      render={(title)=> <p> {title} </p>}
      /> */}
       {/* <Children 
      title={()=> <p> nithish1 </p>}
      head={()=> <p> nithish2 </p>}
      para={()=> <p> nithish3 </p>}
      /> */}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
