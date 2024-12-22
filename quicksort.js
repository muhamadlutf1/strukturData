function quickSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: jika array panjangnya 0 atau 1, kembalikan langsung
    }

    const pivot = arr[arr.length - 1]; // Ambil elemen terakhir sebagai pivot
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) { // Iterasi semua elemen kecuali pivot
        if (arr[i] < pivot) {
            left.push(arr[i]); // Masukkan elemen lebih kecil ke "left"
        } else {
            right.push(arr[i]); // Masukkan elemen lebih besar ke "right"
        }
    }

    // Rekursi dan gabungkan hasil
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Array untuk diuji
const inputArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(inputArray);

// Cetak hasil ke konsol
console.log("Array Sebelum diurutkan:", inputArray);
console.log("Array Setelah diurutkan:", sortedArray);
