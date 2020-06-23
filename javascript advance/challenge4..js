var jhon = {
    fullName: 'jhon bmi',
    mass: 198,
    height: 2.97,
    calBmi: function() {
      return  this.BMI = this.mass / (this.height * this.height);
        
    }
};

var mark = {
    fullName: 'mark bmi',
    mass: 72,
    height: 1.69,
    calBmi: function() {
      return  this.BMI= this.mass / (this.height * this.height);
      
    }
};

console.log(jhon.calBmi());
console.log(mark.calBmi());

//console.log(jhon.calBmi());
//console.log(mark.calBmi());
console.log(jhon.BMI > mark.BMI ? 'jhon is higher then mark in BMI' : 'mark is higher then jhon in BMI');

