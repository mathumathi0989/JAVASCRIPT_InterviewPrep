

function reverse(word){
    word = word.replace(' ','');
    let temp = '';
    for (i = word.length-1; i>=0; i--){
        temp = temp + word.charAt(i);
    }
    let result = temp===word ? "yes its a palindrome - "+word : "No its not - "+word
    console.log(result);
    // if(temp===word){
    //     console.log("yes it s palindrome "+ word);
    // }
    // else {
    //     console.log("no it s not palindrome");
    // }
//console.log(word);
}
reverse("madam");
reverse("nurses run");
reverse("mathu");
