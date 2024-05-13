import users from "./users.js";
// hw
const getUserNames = users => {
   users.forEach((user) => {
    console.log(user.name);
   })
};
  
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// 2hw

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color)
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

// hm3

const getUsersWithGender = (users, gender) => {
    return users.filter(user => user.gender === gender)
    .map((user) => user.name);
  };
  
console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// hm4
const getInactiveUsers = users => {
    return users.filter(user => !user.isActive)

};
console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

// hm5

const getUserWithEmail = (users, email) => {
   return users.find(user => user.email === email)
}; 
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

// hm6

const getUsersWithAge = (users, min, max) => {
    return users.filter(user => user.age > min && user.age < max)
    
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]


// hm7


const function1 = users => {
    return users.reduce((totalBalance, userBalance) => totalBalance + userBalance.balance, 0)
  };
  
  console.log(function1(users)); // 20916


// hm8

const getUsersWithFriend = (users, friendName) => {
    return users.filter(user => user.friends.includes(friendName))
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// hm9

const getNamesSortedByFriendsCount = users => {
    return users.sort((a,b) => a.friends.length - b.friends.length)
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// hm10

const getSortedUniqueSkills = users => {
    const allSkills = users.flatMap(user => user.skills);
    const uniqueSkills = [...new Set(allSkills)];
    console.log(uniqueSkills);
    return uniqueSkills.sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]