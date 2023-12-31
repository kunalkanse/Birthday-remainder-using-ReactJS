// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import { Data } from "./Data";

function App() {
  const [data, setdata] = useState(Data); 
  // useEffect(()=>{ 
  //           fetch(`${Data}`).then(res=>res.json()).then( d=>setdata(d));
  
  // },[data]);
  return (
    <div className="background">
      <div className="mobile_outter">
        <div className="inner_">
          <h2>Today's Birthday {data.length}</h2>
          {data &&
            data.map((e) => {
              return (
                <section key={e.title}>
                  <img src={e.img} alt="" />
                  <div>
                    <h3>{e.title}</h3>
                    <h5>{e.age} years</h5>
                  </div>
                </section>
              );
            })}
          <button
            className="clear"
            onClick={() => {
              setdata([]);
            }}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
