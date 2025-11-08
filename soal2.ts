// Soal 2: Deret Aritmatika dari NIM
let nim2: string = "050428954";

// Ambil dua digit terakhir sebagai angka awal
let start: number = parseInt(nim2.slice(-2)); // 54

// Ambil digit ke-3 dari belakang, tambahkan 1 untuk dijadikan beda
let beda: number = parseInt(nim2[nim2.length - 3]) + 1; // 9 + 1 = 10

// Buat array untuk menampung hasil deret
let deret: number[] = [];

// Loop untuk menampilkan 10 angka pertama
for (let i = 0; i < 10; i++) {
  deret.push(start + i * beda);
}

// Cetak hasil ke terminal
console.log("Deret Aritmatika:");
console.log(deret.join(", "));
