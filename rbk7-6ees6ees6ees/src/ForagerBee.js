class ForagerBee extends Bee {
  
  constructor(age = 10, job = "find pollen", canFly = true) {
  	super();
  	this.age = age;
  	this.job = job;
  	this.canFly = canFly;
  	this.treasureChest = [];
  }

  forage(treasure) {
  	this.treasureChest.push(treasure);
  }
};
