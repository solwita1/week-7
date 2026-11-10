const Discount = ({ productName, price }) => { 
const calculateDiscount  = ( ) => { 
const DiscountRate = document.getElementById("DiscountRate").value; 
const priceWithDiscount = 
Number(price) - (Number(price) * Number(DiscountRate) / 100);  
document.getElementById("discountMessage").innerHTML = 
`<b style="color:green">Price including discount: £${priceWithDiscount}</b>`; 
}; 
return ( 
<div> 
<h2>{productName}</h2> 
<p>Price: £{price}</p>
<label>Enter Discount Rate (%): </label> 
<input 
type="number" 
id="DiscountRate" 
/> 
<br /><br /> 
<button onClick={calculateDiscount}> 
Calculate Discount 
</button> 
<p id="discountMessage"></p> 
</div> 
); 
}; 
export default Discount;