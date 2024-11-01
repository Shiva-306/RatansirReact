import { useState } from "react";

function Count2()
{
    const [count,setCount]=useState(0);
    const increment=()=> {setCount(count+1)}
    return(
        <>
        <h1>Count {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>{count>0 && setCount(count-1)}}>Decrement</button>
        
        </>
    )
}
export default Count2;