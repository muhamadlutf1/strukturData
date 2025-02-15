class DoublyListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}
function removeElements(head, val) {
    let dummy = new DoublyListNode(0);
    dummy.next = head;
    let current = head, prev = dummy;
    while (current !== null) {
        if (current.val === val) {
            prev.next = current.next;
            if (current.next) {
                current.next.prev = prev;
            }
        } else {
            prev = current;
        }
        current = current.next;
    }
    return dummy.next;
}
