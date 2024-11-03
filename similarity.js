const array1 = [7, 8, 9];
const array2 = [7, 9, 10, 11];

// Menggunakan Set untuk menyimpan elemen yang sama
const set1 = new Set(array1);

const commonElements = [];

// Memeriksa elemen di array kedua
for (const num of array2) {
    if (set1.has(num)) {
        commonElements.push(num);
    }
}

// Menampilkan hasil
console.log(commonElements);
