//MOVE ELEMENT TO END

function moveElementToEnd(arr, toMove){

  arr.map(num => {
    if (num === toMove){
      arr.splice(arr.indexOf(num), 1)
      arr.push(num)
    } else num
  })
  return arr

}

moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)
//([2, 1, 2, 2, 2, 3, 4, 2], 2)
//=> [1, 3, 4, 2, 2, 2, 2, 2] 