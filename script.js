let instructor = {
  firstName: "satish",
  isInstructor: true,
  favouriteNumbers: [1, 2, 3, 4],
};
console.log(Object.keys(instructor));
instructor["lastName"] = "lakamsani";
console.log(instructor);
delete instructor["lastName"];
console.log(instructor);
let word = "satish@123";
function charCount(str) {
  for (let i = 0; i < str.length; i++) {
    function isAlpha(str) {
      return /^[A-Za-z]{1,1}$/.test(str);
    }
    if (isAlpha(str[i])) {
    }
    console.log(`${str[i]}&& is ${isAlpha(str[i])}`);
  }
}
charCount(word);
