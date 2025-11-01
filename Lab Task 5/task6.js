function capitalize(str) {
  if (str.length === 0) {
    return ""; // handle empty string edge case
  }
  return str[0].toUpperCase() + str.slice(1);
}

// Test cases
console.log(capitalize('eggplant'));     // "Eggplant"
console.log(capitalize('pamplemousse')); // "Pamplemousse"
console.log(capitalize('squid'));        // "Squid"
