module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1, maxDeep = [1]) {
        arr = arr.filter( item => Array.isArray(item) == true);
         count++;
         for(let item of arr) {
             maxDeep.push(count);
             this.calculateDepth(item, count, maxDeep);
         }
         return Math.max(...maxDeep);
     }
 
};