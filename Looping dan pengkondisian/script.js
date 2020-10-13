// Inputan / Pop-Up box.
// 1. Alert
alert('ini adalah pembelajaran javascript basic');
// Aplikasi sederhana dengan while dan inputan 
var aplikasi = true;
// Selagi Variabel bernila true maka akan terus melakukan pengulangan.
while (aplikasi) {
    // 2. Prompt + alert..
    var nama = prompt('hai selamat datang,Tolong masukan nama anda : ')
    // (cara kedua) alert("halo selamat datang " + nama);
    // 3. Confirm 
    // confirm('aku ganteng kan!!!');
    var konfirmasi = confirm('apakah kamu yakin nama mu ' + nama);
    if (konfirmasi === true) {
        document.getElementById('absen').innerHTML = "Halo selamat datang " + nama;
    } else {
        document.getElementById('absen').innerHTML = "kamu nggak yakin,apalagi aku";
    }
    console.log(document.getElementById('absen'));

    // Dan jika User menekan maka akan keluar
    aplikasi = confirm('apakah anda mau mencoba lagi');
}

// apabila user menekan button yang bernilai false maka akan muncul alert
alert('selamat datang dan terimakasih!');


// Variabel Basic.
var x = 10;
console.log(x);
console.log('isi dari variabel x adalah : ' + x);