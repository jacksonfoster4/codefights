/*
Note: Your solution should have O(n) time complexity, where n is the number of element in l, 
and O(1) additional space complexity, since this is what you would be asked to accomplish in 
an interview.

Given a linked list l, reverse its nodes k at a time and return the modified list. k is a 
positive integer that is less than or equal to the length of l. If the number of nodes in the 
linked list is not a multiple of k, then the nodes that are left out at the end should remain as-is.

You may not alter the values in the nodes - only the nodes themselves can be changed.
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverseNodesInKGroups(l, k) {
    let node = l
    let previous = null
    let i = 0;
    let next;
    let temp = l;
    
    // this block checks if list is longer than k. returns if not
    while(i<k){
        if(temp == null) {
           return l;
       }
        temp = temp.next
        i++
    }
    
    // if list is longer than k, reverse the list in k segments
    i = 0
    while(node && i < k){ // reverse list
       next = node.next
       node.next = previous
       previous = node
       node = next
       i++  
    }
    if(next){
        l.next = reverseNodesInKGroups(next, k) // reverse next segment
    }
    return previous
}
