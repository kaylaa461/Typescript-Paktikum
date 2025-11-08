// Soal 3: Bilangan Prima dari NIM
let nim3: string = "050428954";

// Ambil dua digit terakhir dan tambahkan 10
let batas: number = parseInt(nim3.slice(-2)) + 10; // 54 + 10 = 64

// Fungsi untuk mengecek apakah angka prima atau tidak
function cekPrima(num: number): boolean {
  if (num < 2) return false; // 0 dan 1 bukan bilangan prima
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // kalau habis dibagi, berarti bukan prima
  }
  return true;
}

// Loop untuk mencari bilangan prima dari 1 sampai batas
let hasilPrima: number[] = [];
for (let i = 1; i <= batas; i++) {
  if (cekPrima(i)) {
    hasilPrima.push(i);
  }
}

// Cetak hasilnya ke terminal
console.log(`Bilangan prima dari 1 sampai ${batas}:`);
console.log(hasilPrima.join(", "));
