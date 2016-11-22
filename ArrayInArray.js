//4.判断数组中的每一个元素是否是数组
function arrCheck(array){
  return array.every(isArray);
}

function isArray (element, index, array){
  return Array.isArray(element);
}
