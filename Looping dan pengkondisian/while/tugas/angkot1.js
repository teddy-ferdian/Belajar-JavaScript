// Jawaban dari tugas pak sandhika galih dari WPU tentang pengulangan dan pengkondisian
document.getElementById('title').innerHTML = "Ini Adalah tugas pertama dari WPU tentang Pengulangan"
document.write('<p>Anda adalah seorang juragan angkot dan mempunyai 10 buah angkot dan anda membuat data tersebut,cobalah mmebuat data tersebut dengan menggunakan pengulangan menggunakan pengulangan while</p>');

var noAngkot = 1;
var jmlhAngkot = 10;
while (noAngkot <= jmlhAngkot) {
    document.write(`<p>Angkot No. ${noAngkot} beroperasi dengan baik` + "</p>");
    console.log("Angkot No." + noAngkot + " beroperasi dengan baik");
    noAngkot++
}

document.write('<p>Anda adalah seorang juragan angkot dan mempunyai 10 buah angkot dan anda membuat data tersebut,cobalah mmebuat data tersebut dengan menggunakan pengulangan menggunakan pengulangan for</p>');

var noAngkot1 = 1;
var jmlhAngkot1 = 10;
for (var noAngkot1 = 1; noAngkot1 <= jmlhAngkot1; noAngkot1++) {
    document.write(`<p>Angkot No.${noAngkot1} beroperasi dengan baik`);
    console.log("Angkot No." + noAngkot1 + " beroperasi dengan baik");
}
