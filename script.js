var numberToFind = 0;
var attemps = 0;

function refresh(){

    attemps = 0;
    numberToFind = parseInt(Math.random() * 100);
    console.log(numberToFind);

}

function verifyNumber() {

    var number = document.getElementById('btn-number').value;
    
    if(number > 1000 || number < 1){
        alert('Número inválido!');
        return
    } 

    if(number > numberToFind) {
        attemps++;
        alert('🚨 O número é MENOR!')
    } else if (number < numberToFind){
        attemps++;
        alert('🚨 O número é MAIOR!')
    } else{
        alert('✅ Parabéns você acertou! Com ' + attemps + ' erros!');
        refresh();
    }
}

refresh();