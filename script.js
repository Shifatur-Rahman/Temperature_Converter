// let fahrenheit, far, celcius, cel;

// far = parseInt(prompt(`Enter fahrenheit Value: `));
// cel = parseInt(prompt(`Enter Celcius Value: `));
// fahrenheit = (1.8*cel)+ 32;
// celcius =(5/9)*(far-32);

// console.log(fahrenheit + ` fahrenheit`);
// console.log(celcius + ` Celcius`);


let celcius = document.getElementById("cel");
let fahrenheit = document.getElementById("fahr");
// let kelvin = document.getElementById("kel").value;

fahrenheit_Value = (1.8*celcius)+ 32;
celcius_Value =(5/9)*(fahrenheit-32);

console.log(fahrenheit_Value);
console.log(celcius_Value);




// const inputs = document.getElementsByClassName("input");

// for (let i = 0; i < inputs.length; i++) {
//     let input = inputs[i];

//     input.addEventListener("input", function (e) {
//         let value = parseFloat(e.target.value);
        
//         switch (e.target.name) {
//             case "celcius":
//                 fahrenheitInput.value = (value * 1.8) + 32;
//                 kelvinInput.value = value + 273.15;
//                 break;
//             case "fahrenheit":
//                 celciusInput.value = (value - 32) / 1.8;
//                 kelvinInput.value = ((value - 32) / 1.8) + 273.15;
//                 break;
//             case "kelvin":
//                 celciusInput.value = value - 273.15;
//                 fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
//                 break;
//         }
//     });
// }