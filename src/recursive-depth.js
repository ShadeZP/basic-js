module.exports = class DepthCalculator {
    calculateDepth(arr){
        let depth = 0;
        if (Array.isArray(arr)){
            for (let i = 0; i < arr.length; i++ ){
                if (Array.isArray(arr[i])){
                    depth = Math.max (this.calculateDepth(arr[i]), depth);
                };      
            };
            ++depth;
        }; 
        return depth       
    };
}