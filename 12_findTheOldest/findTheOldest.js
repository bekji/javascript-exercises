const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        if(!a.yearOfDeath){
            a.yearOfDeath = 2022;
        }
        if(!b.yearOfDeath){
            b.yearOfDeath = 2022;
        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    })

    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
