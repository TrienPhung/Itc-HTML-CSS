//Sử dụng sort để sắp xếp mảng tăng dần, giảm dần
//1.Sắp xếp tăng dần
var numbers = [2, 5, 12, 4, 99, 8];
numbers.sort(function(a, b) {
    return a - b;
});
console.log("Mảng tăng dần: " + numbers);
//2.Sắp xếp giảm dần
var numbers = [2, 5, 12, 4, 99, 8];
numbers.sort(function(a, b) {
    return b - a;
});
console.log("Mảng giảm dần: " + numbers);