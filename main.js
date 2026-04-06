// Import function from modules (if any)
Import { calculateTotal } from './src/modules/project1.js';

// Sample data
const items = [
( name: 'Apple ', price : 2 },
( name: 'Banana', price : 3 },
];

//Use the function
const total = calculateTotal(items);

// Output to console
console.log('Total:', total);

// Output to page
document.getElementById(ElementById('output').textContent = 'Total price: $${total}';
