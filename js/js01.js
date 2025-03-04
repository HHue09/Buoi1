alert("Code JS riêng biệt")

function calculateFactorial(n) {
    if (n < 0) return -1; // Giai thừa không xác định cho số âm
    if (n === 0 || n === 1) return 1; // 0! = 1! = 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("Bài 1 - Giai thừa của 5:", calculateFactorial(5));

// Bài 2: Đảo ngược chuỗi
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log("Bài 2 - Đảo ngược của 'hello':", reverseString('hello'));

// Bài 3: Dịch lời chào theo mã quốc gia
function translate(countryCode) {
    switch (countryCode.toUpperCase()) {
        case 'VN':
            return 'Xin chào';
        case 'EN':
            return 'Hello';
        case 'Italia':
            return 'Ciao';

        default:
            return 'Chưa cập nhật lời chào cho mã quốc gia này';
    }
}

console.log("Bài 3 - translate('VN'):", translate('VN'));
console.log("Bài 3 - translate('EN'):", translate('EN'));

// Bài 4: Cắt chuỗi nếu dài hơn 15 ký tự
function subString(str) {
    return str.length > 15 ? str.substring(0, 10) + '...' : str;
}

console.log("Bài 4 - subString('xinchaocacbandenvoiTechmaster'):", subString('xinchaocacbandenvoiTechmaster'));