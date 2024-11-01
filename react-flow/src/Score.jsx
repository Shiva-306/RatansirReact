import { useState } from "react";

function Score()
{
    const [score,setScore]=useState(0);
    const score1=()=>{setScore(score+1)}
    return(
        <>
      <h1>Cricket Score {score}</h1> 
       <button style={{color:"Highlight"}} onClick={score1}>+1 </button>
       <button style={{color:"Highlight"}} onClick={()=>{setScore(score+2)}}>+2 </button>
       <button style={{color:"Highlight"}} onClick={()=>setScore(score+3)}>+3 </button>
       <button style={{color:"Highlight"}} onClick={()=>setScore(score+4)}>Four </button>
       <button style={{color:"Highlight"}} onClick={()=>{setScore(score+6)}}>six</button>
      <button style={{color:"Highlight"}} onClick={()=>{setScore(0)}}>Reset</button>
       </>
    )
}
export default Score;