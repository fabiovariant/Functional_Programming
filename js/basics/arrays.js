let partyHouses = [
    {name: 'Blitz Haus', address:'Rua Augusta', isActive: true,
        nextParties: [
            {
                name: 'Open bar - Funk Party',
                date: '2018-01-01',
                price: 60.00,
                participants: 300
            }
        ]
    },
    {name: 'Lab Club', address:'Rua Augusta', isActive: true,
        nextParties: [
            {
                name: 'Open bar - Funk Party',
                date: '2018-01-01',
                price: 60.00,
                participants: 256
            }
        ]
    },
    {name: 'Anexo', address:'Rua Augusta', isActive: false,
        nextParties: [
            {
                name: 'Open bar - Funk Party',
                date: '2018-01-01',
                price: 60.00,
                participants: 325
            }
        ]
    }
]

/**
 * Filter
 */
let activeHouses = (partyHouses.filter( (p) => { 
    return p.isActive;
}));
console.log(activeHouses);

/**
 * Find
 */
let blitzSearch = partyHouses.find((p) => {
    return p.name.match(/Blitz.*/);
});
console.log(blitzSearch);

/**
 * Every
 */

let everyActive = (partyHouses.every((p) => {
    return p.isActive;
}));
console.log(everyActive);

/**
 * Some
 */
let someActive = (partyHouses.some((p) => {
    return p.isActive;
}));
console.log(someActive);

/**
 * Map and Reduce
*/
let participantsCount = (partyHouses
    .map((p) => {
        return p.nextParties
            .map((nextPar) => {
                return nextPar.participants;
            });
    })
    .reduce((count, parti) => parseInt(count) + parseInt(parti))
);
console.log(participantsCount);