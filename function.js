function isPalindrome (string){

    let newString = string.toUpperCase()
    let array = newString.split('')
    const reversed = array.reverse().join('')

    // if(newString === reversed){
    //     return "c'est un palindrome"
    // }else{
    //     return "ce n'est pas un palindrome"
    // }

    return newString === reversed ? "C'est un palindrome !" : "Ce n'est pas un palindrome";
}
    
    
// }


const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const buttonVerif = document.querySelector('#verif')
const content2 = input2.value


buttonVerif.addEventListener("click", function(){
    
    const content = input1.value
    const result = isPalindrome(content);

    if(content === ""){
        input2.value = ""
    }else{
        input2.value = result;
    }


});

input1.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        buttonVerif.classList.add('active');

        setTimeout(()=>{
            buttonVerif.classList.remove('active');
        }, 100);

        buttonVerif.click();
    }
});

input1.addEventListener('input', function(){
    input2.value='';
})