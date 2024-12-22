function radixSort(arr) {
    // Fungsi untuk mendapatkan nilai maksimum dalam array
    const getMax = (arr) => Math.max(...arr);
    
    // Fungsi untuk mengambil digit pada posisi tertentu (place) dari sebuah angka
    const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    
    // Fungsi untuk menghitung jumlah digit dalam angka
    const digitCount = (num) => (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1);

    // Menghitung jumlah digit terbesar dalam array, yang digunakan untuk menentukan berapa kali kita harus melakukan iterasi
    const maxDigits = digitCount(getMax(arr));

    // Melakukan iterasi berdasarkan jumlah digit terbesar
    for (let k = 0; k < maxDigits; k++) {
        // Membuat 10 bucket untuk masing-masing digit 0-9
        const buckets = Array.from({ length: 10 }, () => []);
        
        // Membagi angka-angka dalam array berdasarkan digit ke-k (digit yang relevan pada iterasi saat ini)
        for (let i = 0; i < arr.length; i++) {
            const digit = getDigit(arr[i], k); // Mendapatkan digit pada posisi ke-k
            buckets[digit].push(arr[i]); // Menambahkan angka ke bucket yang sesuai dengan digit tersebut
        }
        
        // Menyatukan kembali semua elemen dari semua bucket ke dalam array arr
        // Menggunakan [].concat(...buckets) untuk menyatukan semua bucket dalam urutan yang tepat
        arr = [].concat(...buckets);
    }

    // Mengembalikan array yang sudah diurutkan
    return arr;
}

// Contoh array input
const inputArray = [170, 45, 75, 90, 802, 24, 2, 66];

// Mengurutkan array menggunakan radix sort
const sortedArray = radixSort(inputArray);

// Menampilkan array sebelum dan sesudah diurutkan
console.log("Array Sebelum diurutkan:", inputArray);
console.log("Array Setelah diurutkan:", sortedArray);
