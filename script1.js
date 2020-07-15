const numbers = document.querySelectorAll(".number");
 numbers.forEach((number) => {
 number.addeventlistener("click",()=>{
       console.log("number is pressed")
  })
 });
