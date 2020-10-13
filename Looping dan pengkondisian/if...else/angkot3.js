document.getElementById('page').innerHTML = "Ini adalah tugas selanjutnya dari pak dosen Sandhika galih dengan materi pengulangan menggunakan For dan pengkondisian If...dan else";

document.getElementById('soal').innerHTML = "ini masih soal kemaren tetapi menggunakan pengulangan for dan pengkondisian if dan else";


var noAngkot = 1,
    angkotBeroperasi = 6,
    jlmhAngkot = 10;

for (noAngkot = 1; noAngkot <= jlmhAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No.${noAngkot} keadaan baik-baik saja`);
        document.write(`<p>Angkot No.${noAngkot} Sedang baik-baik saja</p>`)
    } else {
        console.log(`Angkot No.${noAngkot} sedang tidak baik-baik saja`);
        document.write(`<p>Angkot No.${noAngkot} sedang tidak baik-baik saja</p>`)
    }
}
