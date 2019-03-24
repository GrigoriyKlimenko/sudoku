module.exports = function solveSudoku(matrix) {
  // your solution
  let i = 0;
  let j = 0;
  let num = 1;
  let stepArray = [];
  let x = 0;

  for (i; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (i < 0) { i = 0; }
      if (j < 0) { j = 0; }

      if (matrix[i][j] === 0) {
        for (num; num <= 9; num++) {
          if (isGoodNum(i, j, matrix, num)) {
            matrix[i][j] = num;
            num++;
            stepArray.push(i, j, num);
            num = 1;
            break;
          }
          if ((num == 9) && (!isGoodNum(i, j, matrix, num))) {
            i = stepArray[stepArray.length - 3];
            j = stepArray[stepArray.length - 2];
            num = stepArray[stepArray.length - 1];
            matrix[i][j] = 0;
            stepArray.pop();
            stepArray.pop();
            stepArray.pop();
            i--;
            j--;
            break;
          }
        }
        if (num == 10) {
          i = stepArray[stepArray.length - 3];
          j = stepArray[stepArray.length - 2];
          num = stepArray[stepArray.length - 1];
          matrix[i][j] = 0;
          stepArray.pop();
          stepArray.pop();
          stepArray.pop();
          i--;
          j--;
          break;
        }
      }
    }
  }

  function isGoodNum(i, j, matrix, num) {
    return isGoodRow(i, j, matrix, num) && isGoodColi(i, j, matrix, num) && isGoodSquare(i, j, matrix, num);
  }

  function isGoodRow(i, j, matrix, num) {
    for (j = 0; j < 9; j++) {
      if (matrix[i][j] == num) {
        return false;
      }
    }
    return true;
  }
  function isGoodColi(i, j, matrix, num) {
    for (i = 0; i < 9; i++) {
      if (matrix[i][j] == num) {
        return false;
      }
    }
    return true;
  }
  function isGoodSquare(i, j, matrix, num) {
    let x = Math.floor(i / 3) * 3;
    let y = Math.floor(j / 3) * 3;
    for (i = 0; i <= 2; i++) {
      for (j = 0; j <= 2; j++) {
        if (matrix[i + x][j + y] == num) {
          return false;
        }
      }
    }
    return true;
  }

  return matrix;
}



