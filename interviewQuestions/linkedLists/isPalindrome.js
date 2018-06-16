/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, 
since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;
For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.
*/

// Definition for singly-linked list:
//function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    // length of list
    let length = 0;
    let node = l
    while(node){
      length++
      node = node.next
    }
    
    // middle node
    node = l
    let i = 0;
    let middle; // node for the second half of list
    let midNode; // if length is odd this is the one node
    while(node){
      if(length % 2 == 0 && i == length / 2){ // if length is even
        middle = node
        break;
      }
      else if(length % 2 != 0 && i == (length-1) / 2){ // if length is odd
        midNode = node
        middle = midNode.next
        break;
      }
      i++
      node = node.next
    }
    
    // reverse second half
    node = middle
    let previous = null
    while(node){
      let save = node.next
      node.next = previous
      previous = node
      node = save
    }
    
    //check if palindrome
    let reversedHalf = previous // rename for more clarity
    i = 0
    if(length % 2 != 0) length -= 1
    while(reversedHalf && i != length / 2){
      if(l.value != reversedHalf.value) return false
      l = l.next
      reversedHalf = reversedHalf.next
      i++
    }
    return true
  }
  
  