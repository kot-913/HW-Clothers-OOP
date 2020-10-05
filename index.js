// HW-TASK-1 MODULE PATTERN

//if we need to work with changed value from previos pass

// function getMathModule(x) {
//   let xValue = x;

//   return {
//     sum: function (y) {
//       return (xValue += y);
//     },
//     sub: function (y) {
//       return (xValue -= y);
//     },
//     multy: function (y) {
//       return (xValue *= y);
//     },
//     divide: function (y) {
//       return (xValue /= y);
//     },
//   };
// }

// getMath5 = getMathModule(5);
// console.log(getMath5.sum(7));
// console.log(getMath5.sub(9));
// console.log(getMath5.multy(4));
// console.log(getMath5.divide(2));

// getMath5 = getMathModule(9);
// console.log(getMath5.sum(7));
// console.log(getMath5.sub(9));
// console.log(getMath5.multy(4));
// console.log(getMath5.divide(2));

// if we need to use on every new pass single x value, not the chaneged version+++++++++++++++++++++++++++

// function getMathModule(x) {
//   let xValue;

//   return {
//     sum: function (y) {
//       xValue = x;
//       return (xValue += y);
//     },
//     sub: function (y) {
//       xValue = x;
//       return (xValue -= y);
//     },
//     multy: function (y) {
//       xValue = x;
//       return (xValue *= y);
//     },
//     divide: function (y) {
//       xValue = x;
//       return (xValue /= y);
//     },
//   };
// }

// getMath5 = getMathModule(5);
// console.log(getMath5.sum(7));
// console.log(getMath5.sub(9));
// console.log(getMath5.multy(4));
// console.log(getMath5.divide(2));

// getMath5 = getMathModule(9);
// console.log(getMath5.sum(7));
// console.log(getMath5.sub(9));
// console.log(getMath5.multy(4));
// console.log(getMath5.divide(2));

// HW - TASK - 2 PROTOTYPES=================================================================================================================

// const Gym = function (name, prise, company) {
//   this.name = name;
//   this.prise = prise;
//   this.company = company;
// };

// Gym.prototype.getConditions = function () {
//   return this.name + ":" + " " + this.prise;
// };

// Gym.prototype.getDistrict = function () {
//   return this.name + " " + "placed at" + " " + this.filialBranch;
// };

// const Doza = function (name, prise, filialBranch) {
//   Gym.call(this, name, prise, "Doza");
//   this.filialBranch = filialBranch;
// };

// Object.setPrototypeOf(Doza.prototype, Gym.prototype);

// const dozaCecani = new Doza("FitnesDoza-Checani", 400, "Checani");
// const dozaBuiucani = new Doza("FitnesDoza #5", 700, "Buiucani");

// console.log(dozaCecani);
// console.log(dozaBuiucani);

// console.log(dozaCecani.getConditions());
// console.log(dozaBuiucani.getDistrict());

//HW-TASK-3 OOP===========================================================================================================================

// class Gym {
//   constructor(name, prise, district) {
//     this.name = name;
//     this.prise = prise;
//     this.district = district;
//   }
//   getConditions() {
//     return this.name + ":" + this.prise;
//   }
// }

// class Doza extends Gym {
//   getDistrict() {
//     return this.name + "placed at" + " " + this.district;
//   }
// }

// const dozaCecani = new Gym("FitnesDoza-Cecani", 400, "Cecani");
// const dozaBuiucani = new Doza("FitnesDoza#5", 700, "Buiucani");

// console.log(dozaCecani);
// console.log(dozaBuiucani);
// console.log(dozaCecani.getConditions());
// console.log(dozaBuiucani.getDistrict());

//first is the child of main class, second is the chaild of chaild-class. If it isn't enaugh, please, let me know.
