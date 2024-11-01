import { useState } from "react";

function DiscountApplied() {
    const originalPrice = 7899;
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    const applyDiscount=(discountValue)=>{
        if(discountValue===10) {
            setDiscount(10);
            setPrice(originalPrice*0.1);
        }
        else if(discountValue===20){
            setDiscount(20);
            setPrice(originalPrice*0.2);
        }
        else if(discountValue===30){
            setDiscount(30);
            setPrice(originalPrice*0.3);
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
        <button style={{ color: 'blue' }} onClick={() => applyDiscount(10)}>Apply 10%</button>
        <button style={{ color: 'orange' }} onClick={() => applyDiscount(20)}>Apply 20%</button>
        <button style={{ color: 'violet' }} onClick={() => applyDiscount(30)}>Apply 30%</button>
        <button style={{ color: 'green' }} onClick={() => applyDiscount(0)}>Reset</button>
    </>
);
}
export default DiscountApplied;


