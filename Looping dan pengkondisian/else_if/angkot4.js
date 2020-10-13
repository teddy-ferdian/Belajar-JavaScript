document.getElementById('title').innerHTML = "Ini adalah pengkondisian Else If dan di gabung dengan pengulangan FOR";

document.getElementById('page').innerHTML = "Ini adalah lanjutan dari tugas pak dosen Sandhika galih,tentang angkot yang kemaren jika Clue nya di tambah lagi";

document.getElementById('soal').innerHTML = "Jika Angkot nomor 1 - 6 baik-baik saja dan angkot nomor 8 sudah di perbaiki dari bengkel sedangakan sisanya blm jadi maka..";


var noAngkot = 1,
    angkotBeroperasi = 6,
    jmlhAngkot = 10;

for (noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log(`Angkot No.${noAngkot} keadaan baik-baik saja`);
        document.write(`<p>Angkot No.${noAngkot} keadaan baik baik saja</p>`);
    } else if (noAngkot == 8) {
        console.log(`Angkot No.${noAngkot} sedang lembur`);
        document.write(`<p>Angkot No.${noAngkot} sedang lembur</p>`);
    } else {
        console.log(`Angkot No.${noAngkot} Sedang di dalam bengkel`);
        document.write(`<p>Angkot No.${noAngkot} Sedang di dalam bengkel</p>`)
    }
} 