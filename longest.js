function longest(s1, s2) {
  let string = s1.concat(s2);
  let arr = string.split('');
  let sorted = arr.sort();
  let result = [];
    for (let i = 0; i < sorted.length; i++){
      if (sorted[i] !== sorted[i+1])
        result.push(sorted[i])  
    }
       return result.join('')
}
