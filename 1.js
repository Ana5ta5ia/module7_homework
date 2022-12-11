const hairDryer = {
  brand: "Xiaomi",
  model: "CMJ03LX",
  power: "1800",
  voltage: "220",
  price: "6990"
}
function printObj(obj) {
    for(let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

printObj(hairDryer)