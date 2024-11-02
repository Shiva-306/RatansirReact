import { useState } from "react";

function DiscountApplied() {
    const originalPrice = 10999;
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    const applyDiscount=(discountValue)=>{
        if(discountValue===5) {
            setDiscount(5);
            setPrice(originalPrice*0.05);
        }
        else if(discountValue===15){
            setDiscount(15);
            setPrice(originalPrice*0.15);
        }
        else if(discountValue===25){
            setDiscount(25);
            setPrice(originalPrice*0.25);
        }
        else if(discountValue===0) {
            setDiscount(0);
            setPrice(originalPrice*0);
        }
};

return (
    <>
        <h1 style={{color:"orange"}}>Original Price: ${originalPrice}</h1>
        <h2>Discount Price: ${price.toFixed(2)}</h2>
        <p>Click a button to select the discount</p>
        <button style={{ color: 'blue' }} onClick={() => applyDiscount(5)}>Apply 5%</button>
        <button style={{ color: 'orange' }} onClick={() => applyDiscount(15)}>Apply 15%</button>
        <button style={{ color: 'violet' }} onClick={() => applyDiscount(25)}>Apply 25%</button>
        <button style={{ color: 'green' }} onClick={() => applyDiscount(0)}>Reset</button>
    </>
);
}
export default DiscountApplied;


