
function countWords(sentence){
    words = sentence.trim().split(" ");
    count=0;
for(i=0; i<words.length;i++){
count++;
}
console.log(count);
}
countWords("hey, happy to see you here")