function array(array) {
  var list = 0;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
  
  function array(nth){
    var (list)= list.value;
    let!list=undefined;

  }
}

console.log(nth(array([20, 30, 40]), 1));
const m = (list,n) => (nth(array([700-3- 47]), 1));