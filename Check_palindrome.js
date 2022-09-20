
let str = "naman";
function palindrome(str) {

  let bag = "";
  for (let i = str.length - 1; i >= 0; i--) {
    bag += str[i]
  }
  return bag
}

let rev_str = palindrome(str)
if (rev_str == str) {
  console.log("Yes Palindrome")
} else {
  console.log("Not Palindrome")
}