let resturent = {
    name: 'vintage',
    guestcapacity: 75,
    guestcount: 0,
    checkavailability: function(partyperson) {
        party =this.guestcapacity - this.guestcount
        console.log(party)
        return party >= partyperson
    },
    bookparty: function(party1) {
        party1 = this.guestcount + party1
        this.guestcount = party1
    },
    removeparty: function(party1complete) {
        party1complete = this.guestcount-5
        this.guestcount = party1complete
    }
    
}
  /*let status = resturent.checkavailability(7)
   console.log(status)*/

//seatparty(72)

resturent.bookparty(72)
console.log(resturent.checkavailability(4))

//remveparty(5)

resturent.removeparty(5)
console.log(resturent.checkavailability(4))