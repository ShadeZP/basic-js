module.exports = class DepthCalculator {
    calculateDepth(arr, depth=0) {

        // remove line with error and write your code here        
            if (!Array.isArray(arr)){
                return 0;
            };
            for (let i = 0; i < arr.length; i++ ){
                depth = Math.max (this.calculateDepth(arr[i]), depth)            
             };
            return 1+depth;    
        };
    };