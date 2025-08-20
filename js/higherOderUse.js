const radius = [1,2,3,4,5]

const area = function(radius){
    return Math.PI * radius * radius;
}

const diameter = function(radius){
    return 2*radius;
}

const calculate = function(radius,logic){
    const output = [];
    for(let i =0; i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log("the area is",calculate(radius,area))
