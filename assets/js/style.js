let i = 0;
let message = 'Olá, me chamo Eduardo. E venho por meio desse Portfolio lhe apresentar minhas habilidades e estudos. Sou um desenvolvedor Front-End Junior, e um estudante na área de ethical hacking trainner.';

typing();

function typing(){
    if(i < message.length){
        document.getElementById('text').innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}