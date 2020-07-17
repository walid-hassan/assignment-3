// Feet to mile converter

function feetToMile(feet){
    if(feet <= 0){
        return "Invalid Input."
    }
    else{
        var mile = feet / 5280;
        return mile.toFixed(7);
    }
}
var result = feetToMile(33);
console.log(result);

// Wood calculator for bed, table and chair.

function woodCalculator(numOfBed, numOfTable, numOfChair){
    if(numOfBed < 0 || numOfTable < 0 || numOfChair < 0){
        return "Invalid Input";
    }
    else{
        var sumOfBed = 5 * numOfBed;
        sumOfTable = 3 * numOfTable;
        sumOfChair = 1 * numOfChair;
        total = sumOfBed + sumOfTable + sumOfChair;
        return  total;
    }
}
var result = woodCalculator(4, 2, 7);
console.log(result);

// Bulding brick calculator

function brickCalculator(n){
    var brickForFloor11To20th = 0;
    var brickForFloorgAfter20th = 0;
    if(n < 1 ){
      return "Invalid Input"
    }
    else{
      for(var i = 1; i <= n; i++){ 
        
        if(i <= 10 && i > 0){
          var brickForFloor1To10th = i * 15000;
          }
          else if(i > 10 && i <= 20){
            var tempI1 = i - 10;
            brickForFloor11To20th = tempI1 * 12000;
            }
          else {
            var tempI2 = i - 20;  
            brickForFloorgAfter20th = tempI2 * 10000
          }
          
          var total = brickForFloor1To10th + brickForFloor11To20th + brickForFloorgAfter20th;
        }
      return total;
    } 
    
  }
  var bricksForBuilding = brickCalculator(44)
  console.log(bricksForBuilding);

//   Tiny friend name finder from a array.

function tinyFriend(friendNames){
    var tinyName = friendNames[0];

    for(var i = 0; i < friendNames.length; i++ ){
        var singleName = friendNames[i];
        if(tinyName.length > singleName.length ){
            tinyName = singleName;
        }
        
    }
    return tinyName;
}
var result = tinyFriend(['chocolate', 'lemon', 'tea', 'nimky'])
console.log(result);