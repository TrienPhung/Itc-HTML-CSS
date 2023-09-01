
//1.1 Chuỗi có bao nhiêu kí tự?

var str = "ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS;";
var length = str.length;
console.log("Độ dài của chuỗi là: " + length + " kí tự");
//1.2 Tìm vị trí của chữ ITC cuối cùng trong chuỗi trên


var lastIndex = str.lastIndexOf("ITC");
console.log("Vị trí cuối cùng của chuỗi 'ITC' là: " + lastIndex);
//1.3 Dùng split để tách các từ

var words = str.split(" ");
console.log("Các từ trong chuỗi sau khi tách: ", words);

//1.4 Thay thế tất cả từ JS thành Javascipt

var replacedStr = str.replace("JS", "Javascript");
console.log("1.4 Chuỗi sau khi thay thế: ", replacedStr);

//1.5 Kiểm tra xem có chữ JS trong chuỗi không

if (str.includes("JS")) {
    console.log("1.5 Chuỗi chứa từ 'JS'");
} else {
    console.log("1.5 Chuỗi không chứa từ 'JS'");
}