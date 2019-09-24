function addOne(num, sum=0, count=0){
    var count = count;
    var firstFew = Math.floor(num / 10);
    var last = num % 10;

    if (num < 10){
        sum += ((num + 1) * Math.pow(10, count));
        return sum;
    } else {
        sum += ((last + 1) * Math.pow(10, count));
        last == 9 ? count+=2 : count++ 
        return addOne(firstFew, sum, count);
    }
}

let result = addOne(929);
console.log(result);