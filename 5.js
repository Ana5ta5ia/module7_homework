class Technic {
  constructor (name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
  plugIn() {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
  }
  getPowerUset() {
   return this.isPlugged ? this.power:0;
  }
}

Technic.prototype.plugIn = function() {
  console.log(this.name + " is plugged!");
  this.isPlugged = true;
};

Technic.prototype.getPowerUsed = function() {
  return this.isPlugged ? this.power: 0;
};


const HairDryer = new Technic("HairDryer", 105);
const Phone = new Technic("Phone", 70);


HairDryer.plugIn() + Phone.plugIn();
console.log(HairDryer.getPowerUsed() + Phone.getPowerUsed());