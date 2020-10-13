document.write('pengulangan FOR');
document.getElementById('page').innerHTML = "Ini adalah pengulangan menggunakan FOR";


for (i = 1; i <= 10; i++) {
    console.log('hello world ' + i + "X");
    document.writeln(`<p>hello world ` + i + "X</p>");
}

// Tugas dari pak dosen sandhika WPU Lanjutan dari angkot 1 yaitu angkot nomor 6 - 10 sedang tidak beroperasi menggunkan pengulangan while dan for

var noAngkot = 1;
angkotBeroperasi = 6;
jmlhAngkot = 10;

while (noAngkot < angkotBeroperasi) {
    console.log(`Angkot No.${noAngkot} Sedang Beroperasi`);
    noAngkot++
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlhAngkot; noAngkot++) {
    console.log(`Angkot No.${noAngkot} Sedang Tidak Beroperasi`);
}
