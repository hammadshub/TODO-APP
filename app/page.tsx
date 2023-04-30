// "use client";

// import { useState } from "react";



// export default function Home() {
//   //const val = "hello";
//   const [val, setVal]= useState('Hello 1');
//   const [val2, setVal2]= useState('Hello 2');

//   const onChangeHandler = (e:any) =>{
//     //console.log("e is" ,e);
//     setVal(e.target.value);
//   }

//   const onChangeHandler2 = (e:any) =>{
//     //console.log("e is" ,e);
//     setVal2(e.target.value);
//   }

//   return(
//   <>
//   <br />
//   <input type="text" value={val} onChange={onChangeHandler}/>
//   <br />
//   <br />
//   <input type="text" value={val2} onChange={onChangeHandler2}/>
//   <br /><br />
//   Length of String 1 : {val.length}
//   <br /><br />
//    Length of String 2 :{val2.length} 
//   </>
  
// );
// }

import React from "react";
import Todo from "./todo";


export default function page(){
  return(
    <>
    <Todo/>
    </>
  );
}





