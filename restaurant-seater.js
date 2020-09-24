let rest = {
    name: 'bobs',
    guestCap: 75,
    guestCount: 0,
    checkAvailability(partySize) {
        let currentCap = this.guestCap - this.guestCount
        return partySize <= currentCap
    },
    seatParty(partySize) {
        this.guestCount += partySize
    },
    removePart(partySize) {
        this.guestCount -= partySize
    }
}

let status = rest.checkAvailability(4)
console.log(status)

rest.seatParty(2)
rest.removePart(1)
console.log(rest)
