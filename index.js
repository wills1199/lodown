'use strict';

// YOU KNOW WHAT TO DO //


/**
* identity: Designed to take any value and return that value unchanged.
*
* @param {Value} value: The value that will be returned.
*
* @return {Value}: Will return the value that was given.
*/

function identity(value) {
    return value;
}

module.exports.identity = identity;


/**
* typeOf: Designed to take a value and return its type in a string: "string", "array", "object"
* "undefined", "number", "boolean", "null", "function".
*
* @param {Value} value: The value that will be tested.
*
* @return {String}: Will return the type of the value as a string.
*/

function typeOf(value){
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null){
        return "null";
    }
    return typeof(value);
}

module.exports.typeOf = typeOf;


/**
* first: Designed to take an array and a number and output the same number of elements
* as the value given. If the array parameter is not an array, an empty array literal will be given.
* If the value argument is not given or is not a number, the first element of the array will be returned.
* 
* @param {Array} array: An array full of elements that will be returned if the value is a number greater than zero.
* @param {Value} value: The number of elements that will be output. 
* If there is no value given or if the value given is not a number, it will return the first element in the array.
* If the number is negative, it will return an empty array literal.
* If the number is greater than the array.length all elements of the array will be output.
*
* @return {Array}: Will return either an empty array of elements, an empty array, or only some elements of the array corresponding to the value.
*/

function first(array, value){
    if (!Array.isArray(array) || value < 0){
        return [];
    } else if (isNaN(value)){
        return array[0];
    } else if (value > array.length){
        return array;
    } else if (typeof(value) === "number"){
        return array.slice(0, value);
    }
}

module.exports.first = first;


/**
* last: Designed to take an array and a number and output the same number of elements
* as the value given starting from the end of the array. If the array parameter is not an array, an empty array literal will be given.
* If the value argument is not given or is not a number, the last element of the array will be returned.
* 
* @param {Array} array: An array full of elements that will be returned if the value is a number greater than zero.
* @param {Value} value: The number of elements that will be output. 
* If there is no value given or if the value given is not a number, it will return the last element in the array.
* If the number is negative, it will return an empty array literal.
* If the number is greater than the array.length all elements of the array will be output.
*
* @return {Array}: Will return either the entire array of elements, an empty array, or only some elements of the array corresponding to the value
* starting from the end of the array.
*/

function last(array, value){
    if (!Array.isArray(array) || value < 0){
        return [];
    } else if (isNaN(value)){
        return array[array.length - 1];
    } else if (value > array.length){
        return array;
    } else if (typeof(value) === "number"){
        return array.slice(1, array.length);
    }
}

module.exports.last = last;


/**
* indexOf: Designed to take an array and a value and return the first occurrance of that values index in the array.
*
* @param {Array} array: The array will be cycled through with a for loop and the index of the first time the value is seen will be returned.
* @param {Value} value: The value that will be looked for in the array.
*
* @return {Number}: The index of the first occurance of the value will be returned.
* If the value is not in the arrat, -1 will be returned.
*/


function indexOf(array, value){
    for (let i = 0; i < array.length; i++){
        if (value === array[i]){
            return i;
        } 
    } return -1;
}

module.exports.indexOf = indexOf;



/**
* contains: Designed to return true if the value given is contained within the array.
* 
* @param {Array} array: The array of values that will be cycled through with a for loop.
* @param {Value} value: The value that will be searched for within the array.
* 
* @return {Boolean}: Will return true if the array contains the value.
* If the value is not within the array, false will be returned.
*/


function contains(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    } return false;
}

module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} test: The Function to be applied to each value in the 
 * collection
 */

function each(collection, test) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            test(collection[i], i, collection);
        }
    } else {
        for (let key in collection){
            test(collection[key], key, collection);
        }
    }
}

module.exports.each = each;


/**
 * unique: Designed to produce a new array without duplicates.
 * The new array does not modify the original array in any way.
 *
 * @param {Array} array: The given collection to be cleansed/copied.
 *
 * @return {Array} newArray:A new array that adds elements from the original array
 * that are not duplicates.
 *
 */

function unique(array) {
    var newArray = [];
    
    for (let i = 0; i < array.length; i++){
        if (indexOf(newArray, array[i]) === -1){
            newArray.push(array[i]);
        }
    } return newArray;
}

module.exports.unique = unique;



/**
* filter: Designed to filter values in a collection based on a test.
* Takes a collection, Array or Object, and passes each value
* in the collection through a test Function. The test Function returns
* true if the value passes the test, false otherwise. Values that pass
* the test are collected and returned in an output Array.
*
* @param {Array} array: The collection that will be filtered through.
* @param {Function} func: The Function to be applied to each value in
* the collection. The test function must return a boolean based on some
* logic which tests the value given to it.
*
* @return {Array} newArray: An Array containing the filtered collection values.
* The Array will contain only the values that passed the test.
* (The truthy values).
*/

function filter(array, func) {
    var newArray = [];
    
    each(array, function(element, index, array) {
    if(func(element, index, array)) {
        newArray.push(element);
    }
    
    });
    
    return newArray;
}

module.exports.filter = filter;


/**
* reject: Designed to filter values in a collection based on a test.
* Takes a collection, Array or Object, and passes each value
* in the collection through a test Function. The test Function returns
* true if the value passes the test, false otherwise. Values that fail
* the test are collected and returned in an output Array.
*
* @param {Array} array: The collection that will be filtered through.
* @param {Function} func: The Function to be applied to each value in
* the collection. The test function must return a boolean based on some
* logic which tests the value given to it.
*
* @return {Array} newArray: An Array containing the filtered collection values.
* The Array will contain only the values that failed the test.
* (The falsy values).
*/


function reject(array, func) {
    var newArray = [];
    
    filter(array, function(element, index, array) {
    if(func(element, index, array) === false) {
        newArray.push(element);
    }
    
    });
    
    return newArray;
}

module.exports.reject = reject;



/**
* partition: Designed to filter values in a collection based on a test.
* Takes a collection, Array or Object, and passes each value
* in the collection through a test Function. The test Function returns
* true if the value passes the test, false otherwise. Values that fail
* the test are collected and returned into the first Array. Values that pass
* the test are collected and returned into the second Array. 
* After the two truthy and falsy arrays are created, those two arrays are pushed 
* into a third final array.
*
* @param {Array} array: The collection that will be filtered through.
* @param {Function} func: The Function to be applied to each value in
* the collection. The test function must return a boolean based on some
* logic which tests the value given to it.
*
* @return {Array} newArray: An Array containing the two sub arrays of the 
* filtered collection values.
* The first sub array will contain the truth values.
* The second sub array will contain the falsey values.
*/


function partition(array, func){
    
    var newArrayTrue = [];
    var newArrayFalse = [];
    var newArrayFinal = [];
    
    each(array, function(element, index, array) {
    if(func(element, index, array)) {
        newArrayTrue.push(element);
    }
    
    });
    
    newArrayFinal.push(newArrayTrue);
    
    
    filter(array, function(element, index, array) {
    if(func(element, index, array) === false) {
        newArrayFalse.push(element);
    }
    
    });
    
    newArrayFinal.push(newArrayFalse);
    
    return newArrayFinal;
    
    
}

module.exports.partition = partition;


/**
* map: Takes a collection, Array or Object, and passes each value
* in the collection through a Function. The return value is pushed into
* a new array.
*
* @param {Collection} collection: The collection that will be filtered through.
* @param {Function} func: The Function to be applied to each value in
* the collection.
*
* @return {Array} newArray: A new array of elements that have been passed through the Function.
*/


function map(collection, func) {

    var newArray = [];
    
    each(collection, function(element, index, array) {
        newArray.push(func(element, index, array));
    
    });
    
    return newArray;
    
}
module.exports.map = map;



/**
* pluck: Takes an array of objects and returns an array containing the value of
* the property for every element in the array.
*
* @param {Array} array: The array that will be filtered through.
* @param {Key} key: The key in every object.
*
* @return {Object[key]}: The value of every property for every object in the array will be returned.
*/


function pluck(array, key) {
    
  return map(array, function(object) {
    return object[key];
  });
    
}
module.exports.pluck = pluck;



/**
* every: Takes a collection, Array or Object, and passes each value
* in the collection through a test Function. The test Function returns
* true if the every element passes the test, false otherwise. 
* If a Function is not provided, it will return true if every element is truthy, otherwise false.
*
* @param {Collection} collection: The collection that will be filtered through.
* @param {Function} action: The Function to be applied to each value in
* the collection. The test function must return a boolean based on some
* logic which tests the value given to it.
*
* @return {Boolean}: A boolean of either true or false will be returned.
*/


function every(collection, action){

  if(action === undefined) {
     action =  function (collectstuff) {
         if(collectstuff) {
             return true;
         } else {
             return false;
         }
      };
  }
  if(Array.isArray(collection)) {
      for(var i =0; i < collection.length; i++) {
      if(action(collection[i], i, collection) === false) {
          return false;
      }
      }
      return true;
  } else if(typeof(collection) === "object"){
      for (var key in collection) {
          if(action(collection[key], key, collection) === false) {
              return false;
          }
      }
      return true;
  }
}

module.exports.every = every;


/**
* some: Takes a collection, Array or Object, and passes each value
* in the collection through a test Function. The test Function returns
* true if at least one element passes the test.
* Will only return false if all elements are false.
* If a Function is not provided, it will return true if at least one element is truthy.
*
* @param {Collection} collection: The collection that will be filtered through.
* @param {Function} func: The Function to be applied to each value in
* the collection. The test function must return a boolean based on some
* logic which tests the value given to it.
*
* @return {Boolean}: A boolean of either true or false will be returned.
*/


function some(collection, func){
    if(func === undefined){
        func = function(collect){
            if(!!collect === true){
                return true;
            } else {
                return false;
            }
        };
    }

    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
            if(func(collection[i], i, collection)=== true){
                return true;
            }
        }
    } else if (typeof collection === 'object'){
        for(let key in collection){
             if(func(collection[key], key, collection) === true){
                return true;
            }
        }
   }
                return false;
}

module.exports.some = some;


/**
 *reduce: Designed to loop through the data of every element
 *from the collection, pass each element through a function,
 *and then accumulate into a single usable data type.
 *The seed combines the values from all of the elements from the given array.
 *If a seed is not given, then the first element is used as the seed.
 *
 * @param {Array} array: The value to be looped through.
 * @param {Function} func: Function to act upon each element in the array.
 * @param {Seed} seed: The seed is used as a starting point for the accumulator
 * function to combine the values from all of the elements from the given array.
 * 
 * @return {Seed}: Returns the reduced single value of the array in the accumulated seed.
 */


function reduce(array, func, seed) {
    
    if(seed === undefined){
        for(let i = 0; i < array.length; i++){
            if(i === 0){
                seed = array[0];
            }
            else seed = func(seed, array[i], i);
        }
    } else {
        for(let i = 0; i < array.length; i++){
            seed = func(seed, array[i], i);
    }
    }
    return seed;
    
    
}
module.exports.reduce = reduce;



/**
* extend: Designed to copy the properties from one object to the other.
* As more and more objects are passed in, their properties will be copied to the first object,
* in the order that they are passed in.
*
* @param {object,..restObject2}: The objects whose properties will be copied to the first object.
*
* @return {Object1}: Return the updated first object.
*/

  function extend(object1,...restObject2) {
          for(let i = 0; i < restObject2.length; i++){
              
              for(let key in restObject2[i]){
                  
                  object1[key] = restObject2[i][key];
              }
          }
          return object1;
   }

   module.exports.extend = extend;
