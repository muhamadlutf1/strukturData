const numbers = [1, 2, 2, 3, 3, 4, 5, 5,];

// Membuat Map untuk menghitung frekuensi setiap angka
const frequencyMap = new Map();

// Menghitung frekuensi setiap angka
for (const number of numbers) {
    frequencyMap.set(number, (frequencyMap.get(number) || 0) + 1);
}

// Menyiapkan Set untuk menyimpan elemen unik
const uniqueElements = new Set();

// Memeriksa angka dengan frekuensi 1
for (const [key, value] of frequencyMap.entries()) {
    if (value === 1) {
        uniqueElements.add(key);
    }
}

// Menampilkan hasil sesuai kondisi
if (uniqueElements.size > 0) {
    console.log("ada =", Array.from(uniqueElements));
} else {
    console.log("ga ada = []");
}
