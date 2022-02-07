const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}





function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();



console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



function addToZero(arr){
    for(i = 0; i< arr.length; i++){
        if (i + arr == 0){
            console.log('true')
        } else if (i + arr != 0){
            console.log('false')
        }
        
    }

}

addToZero([1,2,3])
addToZero([1,2,3,-2])

//O(n)


console.log(2-2)

function uniqueChars(str){
    for(i<0; i<str.length; i++){
    if(i === str *2){
        console.log('false')
    } else {
        console.log('true')
    }
    }

}

//0(n)

uniqueChars('moonday')
uniqueChars('monday')

function pangram(str){
    if (str.includes(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])){
        console.log('true')
    }else {
        console.log('false')
    }
}

//0(n^2)

pangram('apple')

function longestWord(arr1,arr2){
    if(arr1.length > arr2.length){
        console.log(arr1.length)
    }else if (arr2.length > arr1.length){
        console.log(arr2.length)
    }
}
//O(n*n)

longestWord('hello','one')



