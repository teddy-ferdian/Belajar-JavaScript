document.getElementById('page').innerHTML = "Ini adalah bab tentang Control Pengulangan -  Loop/Literation/Pengulangan";

// Syntax pada pengulangan yaitu :
/*
    1. For
    2. While
    3. Do While
*/

// Contoh pengulangan menggunakan for 
/*
    jika ada alert sebanyak 5 yang sama
    alert('Mulai');
    alert('Hello World');
    alert('Hello World');
    alert('Hello World');
    alert('Hello World');
    alert('Hello World');
    alert('Selesai');
*/
// 1. Jika menggunakan for 
alert('mulai');
for (var i = 0; i <= 2; i++) {
    alert('Hello World');
}
alert('Selesai');

// 2. Dan jika menggunkan while
var ulang = true;
while (ulang) {
    alert('start');
    for (var a = 0; a <= 2; a++) {
        alert('ini adalah pengulangan kombinasi while dan for')
    }
    alert('selesai')
    ulang = confirm('apakah anda ingin mengulang lagi?')
}
// jika pilihanya tidak/false
alert('terimakasih!');

