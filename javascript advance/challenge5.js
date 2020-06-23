var jhon = {
    nam: 'sai',
    bills: [124, 48, 268, 180, 42],
    caltip: function() {
    
        this.alltips = [];
        this.finalamount = [];
        
        for (var i=0; i < this.bills.length; i++) {
            var percentage;
            var biller = this.bills[i];
            if(biller < 50) {
                percentage = .2;
            } else if (biller > 50 && biller < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            this.alltips[i] = biller * percentage;
            this.finalamount[i] = biller + (biller * percentage);
        }
          
}

}



function cleartip(tip) {
  var sum - 0;
    for(var i=0; i < mark.tips )
}
}

    
    
jhon.caltip();
console.log(jhon);

 
console.log(cleartip());























