/*changue theme*/
const theme1= document.querySelector('#theme1')
const theme2= document.querySelector('#theme2')
const theme3= document.querySelector('#theme3')

theme1.addEventListener('click', ()=> changueTheme(1))
theme2.addEventListener('click', ()=> changueTheme(2))
theme3.addEventListener('click', ()=> changueTheme(3))


const body= document.querySelector('body')

const changueTheme=(theme)=>{
    switch (theme) {
        case 1:
            body.classList.remove('theme-2', 'theme-3')
            break;
            case 2:
                body.classList.remove('theme-3')
                body.classList.add('theme-2')
                break;
                case 3: 
                body.classList.remove('theme-2')
                body.classList.add('theme-3')
                default:
                    break;
                }
}

let input= document.querySelector('input')


const numbers=(param)=>{
        resultado.disabled=false
    switch (parseInt(param)) {
        case 0:
            input.value += param
            break;
        case 1:
            input.value += param
            break;
        case 2:
            input.value += param
            break;
        case 3:
            input.value += param
            break;
        case 4:
            input.value += param
            break;
        case 5:
            input.value += param
            break;
        case 6:
            input.value += param
            break;
        case 7:
            input.value += param
            break;
        case 8:
            input.value += param
            break;
        case 9:
            input.value += param
            break;
    }
}

/*Numbers*/
const cero= document.getElementById("0")
cero.addEventListener('click', ()=> numbers('0'))
                
const uno= document.getElementById("1")
uno.addEventListener('click', ()=> numbers('1'))

const dos= document.getElementById("2")
dos.addEventListener('click', ()=> numbers('2'))

const tres= document.getElementById("3")
tres.addEventListener('click', ()=> numbers('3'))

const cuatro= document.getElementById("4")
cuatro.addEventListener('click', ()=> numbers('4'))

const cinco= document.getElementById("5")
cinco.addEventListener('click', ()=> numbers('5'))

const seis= document.getElementById("6")
seis.addEventListener('click', ()=> numbers('6'))

const siete= document.getElementById("7")
siete.addEventListener('click', ()=> numbers('7'))

const ocho= document.getElementById("8")
ocho.addEventListener('click', ()=> numbers('8'))

const nueve= document.getElementById("9")
nueve.addEventListener('click', ()=> numbers('9'))


/*Actions*/
let valor1=0
let tipo=''

const final=(par1,par2)=>{

    const valInput=parseInt(input.value)
    switch (par2) {
        case "+":
            return input.value= par1 + valInput
        
        case "-":
            return input.value= par1 - valInput

        case "x":
            return input.value= par1 * valInput

        case "/":
                return input.value= par1 / valInput
        
        default:
            break;
    }
    
}

const calculator = (param)=>{
    
        switch (param) {
            case '+' :
                valor1 = parseInt(input.value)
                tipo= "+"
                input.value=''      
                break;
            case '-':
                valor1 = parseInt(input.value)
                tipo= "-"
                input.value=''      
                break;
            case 'x':
                valor1 = parseInt(input.value)
                tipo= "x"
                input.value=''      
                break;
            case '/':
                valor1 = parseInt(input.value)
                tipo= "/"
                input.value=''      
                break;
            case 'reset':
                valor1=0;
                tipo='';
                input.value=0
                break;

            case 'delet':
                input.value=input.value.slice(0,input.value.length-1)
                break

            case 'result':
                final(valor1, tipo)
                resultado.disabled=true
                break;
                
            default:
                break;
        }

}


const multiplicacion= document.getElementById('x')
multiplicacion.addEventListener('click',()=> calculator('x'))

const suma= document.getElementById("+")
suma.addEventListener('click', ()=> calculator('+'))

const resta= document.getElementById("-")
resta.addEventListener('click', ()=> calculator('-'))

const division= document.getElementById("/")
division.addEventListener('click', ()=> calculator('/'))

const resultado= document.getElementById("result")
resultado.addEventListener('click', ()=> calculator('result'))

const resetear= document.getElementById("reset")
resetear.addEventListener('click', ()=> calculator('reset'))

const borrar= document.getElementById("delet")
borrar.addEventListener('click', ()=> calculator('delet'))



