function countChar(word){
 map = new Map();
 for(i=0;i<word.length;i++){
    ch = word.charAt(i);
    map.set(ch, (map.get(ch) || 0)+1);
 }

 for(let[char, count] of map){
    console.log(`${char}: ${count}`);
 }

}


countChar("letcode");