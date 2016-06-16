function palindromicNumberGenerator (num){
  var originalNum = 0;
  var stringedNum = 0;
  var reversedNum = 0;
  var steps = 0;

  function reversing(num){
      originalNum = num;
      stringedNum = num.toString();
      stringedNum = stringedNum.split("").reverse().join("");
      reversedNum = Number(stringedNum);
          return reversedNum;
  }
reversing(num);
  if(reversedNum===originalNum&&steps===0){
    console.log('You entered a Palindrome as the first number');
    return steps;
  }

  while(reversedNum!==originalNum){
    originalNum = reversedNum + originalNum;
    reversedNum = reversing(originalNum);
    steps++;
      if(reversedNum===originalNum){
              return {
                'value': originalNum,
                'steps': steps
              };
    }
  }
}
console.log(palindromicNumberGenerator(4));