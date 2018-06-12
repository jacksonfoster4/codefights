/*
Some people are standing in a row in a park. There are trees between them which
cannot be moved. Your task is to rearrange the people by their heights in a
non-descending order without moving the trees.

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/
function sortByHeight(a) {
    let nonTreeIndex = []
    for(let i in a ){
        if(a[i] != -1){
            nonTreeIndex.push(i)
        }
    }
    let sortedNonTrees = a.filter(el => el != -1).sort((a,b)=>a-b)
    for(let i in nonTreeIndex){
        a[nonTreeIndex[i]] = sortedNonTrees[i]
    }
    return a
}
