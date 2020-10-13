// Menggunakan Pengulangan While dan Syntaxnya

/*while(kondisi){
    aksi

increment/decrement 
}
jadi membacanya selama kondisi di dalam kurung bernilai true maka lakukan kasi di dalam block {}
*/

// Jika System di hentikan oleh user..
var a = true;
while (a) {
    console.log("hello tedy");
    // cara menghentikanya
    a = confirm('mau ngulang lagi?');
}

// Jika Pengulangan di hentikan oleh program kalian sendiri
var b = 1;
while (b <= 5) {
    console.log("hello teddy");
    // cara menghentikanya
    b++
}


// Tugas jika ingin menampilkan hello World Sebanyak 10 x gimana syntaxnya???
var c = 1;
while (c <= 10) {
    console.log(c + ' Hello World');
    c++
}



