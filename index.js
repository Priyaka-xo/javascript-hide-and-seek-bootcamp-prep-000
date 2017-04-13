function getFirstSelector (selector) {
  const ul1 = document.querySelector(selector)
  return ul1
 }

 function nestedTarget() {
   const target = document.querySelector('div#nested div div')
   return target
 }

 function increaseRankBy (n) {
   const rankedLists = document.querySelectorAll('.ranked-list')
   const firstList = rankedLists[0]
   const secondList = rankedLists[1]

   let children = firstList.children
   let start = 1
   let i = 0
   let l = children.length
   for (i; i < l; i++) {
     (children[i].innerHTML) = ((start + i + 3).toString())
   }
   children = secondList.children
   start = 12
   i = 0
   l = children.length
   for (i; i < l; i++) {
     (children[i].innerHTML) = ((start - i + 3))
   }
}  

function deepestChild() {
  const deepChild = document.querySelector('#grand-node div div div div')
  return deepChild
}  
   