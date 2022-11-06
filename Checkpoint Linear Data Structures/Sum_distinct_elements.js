var x = [1, 2, 3];
var y = [4, 3, 6];

function distinct(arr, arr1) {
  var sum = 0;

  for (i = 0; i < arr.length; i++) {
    let found = false;
    for (j = 0; j < arr1.length; j++) {
      if (arr[i] == arr1[j]) {
        found = true;
      }
      // console.log(found)
    }
    if (found === false) {
      sum += arr[i];
    }
  }

  for (i = 0; i < arr1.length; i++) {
    let found = false;
    for (j = 0; j < arr.length; j++) {
      if (arr1[i] == arr[j]) {
        found = true;
      }
      // console.log(found)
    }
    if (found === false) {
      sum += arr1[i];
    }
  }
  return sum;
}

console.log(distinct(x, y));
