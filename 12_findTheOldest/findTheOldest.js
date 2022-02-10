const findTheOldest = function(people) {
    const orderedPeopleByAge = people.sort((a, b) => {
        currentYear = (new Date()).getFullYear();
        const aAge =
                (a.yearOfDeath ? a.yearOfDeath : currentYear) - a.yearOfBirth;
        const bAge =
                (b.yearOfDeath ? b.yearOfDeath : currentYear) - b.yearOfBirth;

        return (aAge > bAge) ? 1 : -1;
    });

    return orderedPeopleByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
