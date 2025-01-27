class Stack {
    constructor() {
      this.items = []; // Array untuk menyimpan elemen stack
    }
  
    // Menambahkan elemen ke stack (push)
    push(element) {
      this.items.push(element);
    }
  
    // Menghapus elemen terakhir dari stack (pop)
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Melihat elemen terakhir dari stack tanpa menghapusnya (peek)
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Mengecek apakah stack kosong
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Membersihkan semua elemen dari stack
    clear() {
      this.items = [];
    }
  
    // Mendapatkan ukuran stack
    size() {
      return this.items.length;
    }
  }
  
  // Contoh penggunaan
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log("Elemen pada puncak stack:", stack.peek()); // Output: 30
  console.log("Ukuran stack:", stack.size()); // Output: 3
  
  console.log("Menghapus elemen:", stack.pop()); // Output: 30
  console.log("Elemen pada puncak stack:", stack.peek()); // Output: 20
  
  stack.clear();
  console.log("Stack kosong:", stack.isEmpty()); // Output: true
  