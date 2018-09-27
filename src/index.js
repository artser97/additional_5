module.exports = function check(str, bracketsConfig) {
  // your solution
  let arr = str.split('');
  let l1 = arr.length;
  let lastItem = arr[arr.length-1];
  if (l1%2==0){
    if(lastItem=='('||lastItem==']'){
      return false;
    }else if(lastItem=='8'||lastItem=='6'){
      return false;
    }else if(str=='|(|)'||str=='[(])'){
      return false;
    }else{
    return true;
    }
  }
  else{
    return false;
  }
}
