import { useState } from "react";

function Count()
{
    const [count,setCount]=useState(0);

    const handleClick=()=>{setCount(count+1)};
    return(
        <>
        <h1>Count Value {count}</h1>
        <button onClick={handleClick}>Increment</button>
        </>
    )
}
export default Count;