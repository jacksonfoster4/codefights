/*
Note: Your solution should have O(l1.length + l2.length) time complexity, since 
this is what you will be asked to accomplish in an interview.

Given two singly linked lists sorted in non-decreasing order, your task is to merge them. 
In other words, return a singly linked list, also sorted in non-decreasing order, that 
contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    let falseHead = new ListNode(0)
    let curr = falseHead
    while(l1 || l2){
        if(l1 && l2){
            if(l1.value < l2.value){
                curr.next = l1
                l1 = l1.next
                curr = curr.next
            }
            else {
                curr.next = l2
                l2 = l2.next
                curr = curr.next
            }
        }
        if(l1==null){
            curr.next = l2
            break;
        }
        else if(l2 == null){
            curr.next = l1
            break;
        }
    }
    return falseHead.next
}
