const findTheOldest = function(peopleArray) {
    const currentYear = new Date().getFullYear();
    const oldest = peopleArray.reduce((oldest, person) => {
        const oldestAge = (oldest.yearOfDeath ? oldest.yearOfDeath : currentYear) - oldest.yearOfBirth;
        const personAge = (person.yearOfDeath ? person.yearOfDeath : currentYear) - person.yearOfBirth;
        return oldestAge > personAge ? oldest : person;
    })
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
