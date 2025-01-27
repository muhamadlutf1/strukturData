class Queue {
    constructor() {
      this.items = []; // Array untuk menyimpan elemen queue
    }
  
    // Menambahkan elemen ke akhir queue (enqueue)
    enqueue(element) {
      this.items.push(element);
    }
  
    // Menghapus elemen dari depan queue (dequeue)
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Melihat elemen di depan queue tanpa menghapusnya (front)
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    // Mengecek apakah queue kosong
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Membersihkan semua elemen dari queue
    clear() {
      this.items = [];
    }
  
    // Mendapatkan ukuran queue
    size() {
      return this.items.length;
    }
  }
  
  // Contoh penggunaan
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log("Elemen di depan queue:", queue.front()); // Output: 1
  console.log("Ukuran queue:", queue.size()); // Output: 3
  
  console.log("Menghapus elemen:", queue.dequeue()); // Output: 1
  console.log("Elemen di depan queue:", queue.front()); // Output: 2
  
  queue.clear();
  console.log("Queue kosong:", queue.isEmpty()); // Output: true
  