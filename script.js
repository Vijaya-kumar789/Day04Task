//1)Print odd numbers in an array
//anonymous function
function arr(num){
    var odd=[]
    for (var i=0;i<num.length;i++){
        if (num[i]%2!==0){
          odd.push(num[i]);
        }
    }
  return odd;
}
    console.log(arr([1,2,3]));//output=[ 1, 3 ]
//IIFE function 
(function arr(num){
    var odd=[]
    for (var i=0;i<num.length;i++){
        if (num[i]%2!==0){
          odd.push(num[i]);
        }

    }    console.log(odd);
})([1,2,3])//output=[ 1, 3 ]
//Arrow function
var arr=(num)=>{
     var odd=[]
    for (var i=0;i<num.length;i++){
        if (num[i]%2!==0){
           odd.push(num[i]);
       }
       
    }
    return odd;
}

console.log(arr([1,2,3]));//output=[ 1, 3 ]

//2)Convert all the strings to title caps in a string array
//anonymous function
function name(str){
     str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
 return str.join(" ");      
 }
  console.log(name("i am vijay kumar"));//output=I Am Vijay Kumar
//IIFE function 
    (function (str){
    str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     } 
    console.log(str.join(" "));
    })("i am vijay kumar");//output=I Am Vijay Kumar
//Arrow function
var name = (str)=>{
     str = str.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
     }
    return str.join(" ");
}
console.log(name("i am vijay kumar"));//output=I Am Vijay Kumar

//3)Sum of all numbers in an array 
//anonymous function
function arr1(num){
    var sum = 0;
    for(var i = 0 ; i< num.length ; i++){
       sum = sum + num[i];
    }
    return sum;
  }
  console.log(arr1([1,2,3,4,5]));//output=15
//IIFE function 
(function arr1(num){
var sum = 0;
for (var i = 0;i<num.length;i++){
sum=sum+num[i];
}
console.log(sum);
})([1,2,3,4,5]);    //output=15          
//Arrow function
var arr1 = (num)=>{
    var sum = 0;
    for (var i = 0;i<num.length;i++){
        sum=sum+num[i];
    }
    return sum;
   
}           
console.log(arr1([1,2,3,4,5]));//output=15
//4)Return all the prime numbers in an array 
//anonymous function
var prime1 = function(arr) {
  return (function(array) {
    var Prime = num => {
      for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    return array.filter(num => Prime(num));
  })(arr);
};

console.log(prime1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11]));//output=[ 2, 3, 5, 7, 11 ]
//IIFE function 
( function(numArray){
  numArray = numArray.filter((number) => {
   if (number<2)return false;
    for (var i = 2; i <= Math.sqrt(number); i++) {
     if (number % i === 0) return false;
  }
     return numArray;
 });
     console.log(numArray);
})([1,2,3,4,5,6,7,8,9,10,11]);//output=[ 2, 3, 5, 7, 11 ]
//Arrow function
var isPrime=(num)=>{
       
      for (var i=2;i<num;i++){
          if (num%i===0){
              return false
          }
      }
      return num>1;
  };
 var prime=arr=>arr.filter(num=> isPrime(num));
  console.log(prime([1,2,3,4,5,6,7,8,9,10,11]));   //output=[ 2, 3, 5, 7, 11 ]             

//5)  Return all the palindromes in an array
//anonymous function
function palindrome(arr){
    var pal = true;
    for(var i = 0;i<arr.length/2;i++){
        if(arr[i]!==arr[arr.length-i-1]){
            pal=false;
            break;
        }
    }
    return pal;
}
console.log(palindrome([1,2,3,2,1]));//output=true
//IIFE function 
(function(arr){
    var pal = true;
    for(var i = 0;i<arr.length/2;i++){
        if(arr[i]!==arr[arr.length-i-1]){
            pal=false;
            break;
        }
      
    }
   console.log(pal);
}) ([1,2,3,2]);//output=false
//Arrow function
var palindrome = (arr) => {
    
     var isPalindrome = true;
      for(var i = 0; i < arr.length / 2; i++) {
         if(arr[i] !== arr[arr.length - i - 1]){
          isPalindrome = false; 
          break;
         }
     }
      return isPalindrome;
      }
console.log(palindrome([1,2,3,2,1]));//output=true

//6) Return median of two sorted arrays of same size
//anonymous function
function findMedian(num1,num2){
    var mergearr=num1.concat(num2).sort((a,b)=>a-b);
    var len=mergearr.length;
    if(len%2===0){
      var mid1=mergearr[len/2-1];
      var mid2=mergearr[len/2];
      return (mid1+mid2)/2;
      }else{
        return mergearr[math.floor(len/2)];
      }
    }
  console.log(findMedian([1, 12, 16, 26],[2, 13, 18, 30]));//output=14.5
  //IIFE function
  var median=(function(num1,num2){
      var mergearr=num1.concat(num2).sort((a,b)=>a-b);
    var len=mergearr.length;
    if(len%2===0){
      var mid1=mergearr[len/2-1];
      var mid2=mergearr[len/2];
      return (mid1+mid2)/2;
      }else{
      return mergearr[math.floor(len/2)];
     
      }
  })([1, 12, 16, 26],[2, 13, 18, 30])
  console.log(median);//output=14.5

//07) Remove duplicates from an Array
//anonymous function
function ar(array){
    let ar = [...new Set(array)];
    return arr;               
}
console.log(arr([1,1,2,3,4,5]));//output[ 1, 2, 3, 4, 5 ]
//IIFE function
(function(array){
    var dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4,5]);//output[ 1, 2, 3, 4, 5 ]
  
   //8) Rotate an array by k times
//anonymous function
   function res(num,k){
    var n=num.length;
    k%=n;
    var rotate=[];
    for (var i = 0;i<n;i++){
        rotate[(i+k)%n]=num[i];
    }
    for (var i = 0;i<n;i++){
        num[i]=rotate[i];
    }
   return rotate;
   }
   console.log(res([1,2,3,4,5],3));//output[ 3, 4, 5, 1, 2 ]
   //IIFE function
   (function(num,k){
       var n=num.length;
       k%=n;
       var rotate=[];
       for (var i=0;i<n;i++){
           rotate[(i+k)%n]=num[i];
       }
       for (var i=0;i<n;i++){
           num[i]=rotate[i];
       }
       console.log(rotate);
   })([1,2,3,4,5],3);//output[ 3, 4, 5, 1, 2 ]