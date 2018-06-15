/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the 
number of elements in the list, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers l and an integer k, remove all elements from 
list l that have a value equal to k.
*/
// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function removeKFromList(l, k){
    let curr = l
    while(curr){
        if(curr.next && curr.next.value == k){
            curr.next = curr.next.next
        }
        else {
            curr = curr.next
        }
    }
    // check first node
    return (l && l.value == k) ? l.next : l
}