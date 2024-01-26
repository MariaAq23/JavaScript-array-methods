// JavaScript Array Method assignment

// // 1 Pop()
// // Create an array of your favorite fruits.
// var fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];
// console.log(fruits);
// // Use the `pop` method to remove the last fruit from the array.
// fruits.pop();
// // updated array.
// console.log(fruits);


// // 2 Push ()
// // Create an array of numbers.
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// // Use the `push` method to add a new number to the end of the array.
// numbers.push(11);
// // updated array.
// console.log(numbers);


// // 3 Shift()
// // Create an array of colors.
// var colors = ["Red", "Blue", "Green", "Yellow", "Pink", "Purple"];
// console.log(colors);
// // Use the `shift` method to remove the first color from the array.
// colors.shift();
// // Print the updated array.
// console.log(colors);


// // 4 unshift()
// // Create an array of programming languages.
// var progLanguage = ['JavaScript', 'C++', 'TypeScript', 'C', 'Python'];
// console.log(progLanguage);
// // Use the `unshift` method to add a new programming language to the beginning of the array.
// progLanguage.unshift('Ruby');
// // Print the updated array.
// console.log(progLanguage);


// //  5 slice()
// // Create an array of days in a week.
// var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// console.log(days);
// // Use the `slice` method to create a new array containing only weekdays (Monday to Friday).
// var sliceArray = days.slice(0, 5);
// // Print the new array.
// console.log(sliceArray);


// // 6 reverse()
// // Create an array of characters to represent a word.
// var characters = ['s', 't', 'r', 'e', 's', 's', 'e', 'd'];
// console.log(characters);
// // Use the `reverse` method to reverse the order of characters.
// var reverseArray = characters.reverse();
// // Print the reversed word.
// console.log(reverseArray);


// // 7 concat()
// // Create two arrays, one with fruits and the other with vegetables.
// const fruits = ['apple', 'mango', 'banana', 'orange', 'grapes'];
// console.log(fruits);
// const vegetables = ['carrot', 'tomato', 'onion', 'cucumber', 'potato'];
// console.log(vegetables);
// // Use the `concat` method to merge the two arrays into a single array.
// var concatArray = fruits.concat(vegetables);
// // Print the merged array.
// console.log(concatArray);


// // 8 join()
// // Create an array of words to form a sentence.
// var words = ['Hello,', 'My', 'name', 'is', 'Maria'];
// console.log(words);
// // Use the `join` method to join the words into a single string with spaces.
// var joinArray = words.join(' ');
// // Print the sentence.
// console.log(joinArray);


// // 9 splice()
// // Create an array of numbers.
// var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(numberArray);
// // Use the `splice` method to remove a specific range of numbers from the array.
// var spliceArray = numberArray.splice(4,6);
// // Print the updated array.
// console.log(numberArray);


// // 10 map()
// // Create an array of numbers.
// var number = [2, 4, 6, 8, 10, 12];
// console.log(number);
// // Use the `map` method to create a new array where each number is doubled.
// var doubleNum = number.map((num) => num * 2);
// // Print the new array.
// console.log(doubleNum);


// // 11 filter()
// // Create an array of ages.
// var agesArray = [14, 17, 18, 20, 23, 26, 27, 28, 30, 59, 74];
// console.log(agesArray);
// // Use the `filter` method to create a new array containing only ages greater than 21.
// var filterArray = agesArray.filter((age) => age > 21);
// // Print the filtered array.
// console.log(filterArray);


// // 12 find()
// // Create an array of objects representing books with title and page count.
// var books = [
// {title: 'The Famous Five', pages: 350},
// {title: 'Oliver Twist', pages: 200},
// {title: 'The Secret Seven', pages: 270},
// {title: 'Twilight', pages: 400},
// {title: 'The Silent Patient', pages: 500},
// ];
// console.log(books);
// // Use the `find` method to find a book with more than 300 pages.
// var findBook = books.find((book) => book.pages > 300);
// // Print the details of the found book.
// console.log(findBook);


// // 13 every()
// // Create an array of exam scores.
// var examScore = [13, 34, 55, 48, 26, 80, 97, 65, 72];
// console.log(examScore);
// // Use the `every` method to check if all scores are greater than 60.
// var allScore = examScore.every((num) => num > 60);
// // Print the result.
// console.log(allScore);


// // 14 some()
// // Create an array of temperatures.
// var temperature = [23, 16, 32, 45, 29];
// console.log(temperature);
// // Use the `some` method to check if at least one temperature is above 30 degrees.
// var atLeastOneTempAbove = temperature.some((temp) => temp > 30); 
// // Print the result.
// console.log(atLeastOneTempAbove);


// // 15 forEach()
// // Create an array of names.
// var namesArray = ['Bella', 'Peter', 'Sara', 'Harry'];
// console.log(namesArray);
// // Use the `forEach` method to print each name with a greeting, e.g., "Hello, [Name]!"
// namesArray.forEach((name) => console.log("Hello, " + name + '!'));


// // 16 includes()
// // Create an array of cities.
// var cities = ['Karachi', 'Islamabad', 'Lahore', 'Multan', 'Peshawar'];
// console.log(cities);
// // Use the `includes` method to check if a specific city is in the array.
// var includeCity = cities.includes('Karachi');
// // Print the result.
// console.log(includeCity);


// // 17 reduce()
// // Create an array of numbers.
// var arrayNumbers = [1, 3, 5, 7];
// console.log(arrayNumbers);
// // Use the `reduce` method to calculate the sum of all numbers in the array.
// var sum = arrayNumbers.reduce((total, num) => total + num , 0);   
// // Print the sum.
// console.log(sum);


// // 18 indexOf()
// // Create an array of colors.
// var colorsArray = ['Red', 'Blue', 'Green', 'Yellow', 'Pink'];
// console.log(colorsArray);
// // Use the `indexOf` method to find the index of a specific color.
// var indexColors = colorsArray.indexOf('Green');
// // Print the index.
// console.log(indexColors);


// // 19 lastIndexOf()
// // Create an array with repeated values.
// var values = [1, 2, 3, 4, 5, 2, 3, 5, 4];
// console.log(values);
// // Use the `lastIndexOf` method to find the last index of a specific value.
// var lastIndexOfValue = values.lastIndexOf(3);
// // Print the last index.
// console.log(lastIndexOfValue);


// // 20 toString()
// // Create an array of mixed data types (numbers, strings, booleans).
// var dataTypes = [1, 2, 3, 4, 'Hello', 'JavaScript', true, false];
// console.log(dataTypes);
// console.log(typeof(dataTypes));
// // Use the `toString` method to convert the array to a string.
// var arrayToString = dataTypes.toString();
// // Print the resulting string.
// console.log(arrayToString)
// console.log(typeof(arrayToString));