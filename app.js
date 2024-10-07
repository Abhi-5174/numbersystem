const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

  var sum = 0;
  var primearray = [];
  for(i=0; i<numbers.length; i++){
    var count = 0;
    for(j=1; j<numbers.length; j++){
        if(numbers[i]%j==0){
            count++;
        }
    }
    if(count == 2){
        primearray.push(numbers[i]);
        sum += numbers[i];
    }
  }

  var max = primearray[0];
  var min = primearray[0];
  for(i=0; i<primearray.length; i++){
    if(primearray[i]>max){
        max = primearray[i];
    }
    if(primearray[i]<min){
        min = primearray[i];
    }

  }
  console.log(sum);
  console.log(max);
  console.log(min);