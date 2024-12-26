// const btc=document.getElementById("bitcoin")
//const etc=document.getElementById("second")
 const dtc=document.getElementById("third")



// var settings = {
//   "async": true,
//   "scrossDomain": true,  // Fixed typo
//   "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",  // Fixed space
//   "method": "GET",
//   "headers": {}
// };

// $.ajax(settings)
//   .done(function(response) {
//     console.log("jj");
//   //  btc.InnerHTML=response.bitcoin.usd;

//   //  etc.InnerHTML=response.ethereum.usd;
//   //  dtc.InnerHTML=response.dogecoin.usd;
     
//   })
// Assuming btc is a DOM element, for example:
const btc = document.getElementById("first");
const etc = document.getElementById("second");


  
  const url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";
  fetch(url).then((res)=>{
    return res.json();
  }).then((res)=>{
      btc.innerHTML=res.bitcoin.usd
    etc.innerHTML=res.ethereum.usd
     dtc.innerHTML=res.dogecoin.usd

  })
  //**************also we can use async and await **************************************** */
//  const get= async () => {
//     console.log("getting currencies");
//     const response = await fetch(url);
  
//     const format = await response.json();
//     btc.innerHTML = format.bitcoin.usd;
//     etc.innerHTML = format.ethereum.usd;
//     dtc.innerHTML = format.dogecoin.usd; // Now this should work
//   };
//   get();





//  console.log("hekllo");
 




