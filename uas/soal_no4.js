class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}
