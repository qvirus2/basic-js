module.exports = function countCats(matrix) {
  let catcount=0;
  if (matrix === [] || matrix === undefined) {
    return catcount;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j]=='^^'){
          catcount+=1;
        }  
      }
      }
  return catcount;
  }

};
