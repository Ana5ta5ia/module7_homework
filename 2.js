const hairDryer = {
  brand: "Xiaomi",
  model: "CMJ03LX",
  power: "1800",
  voltage: "220",
  price: "6990"
};
function trueFolse(obj, Key) {
    return (Key in obj);
};
  console.log(trueFolse(hairDryer, "brand")); 
  console.log(trueFolse(hairDryer, "sale")); 