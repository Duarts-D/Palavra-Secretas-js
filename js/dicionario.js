import randomIngles from "./main.js";

const my_list_all = document.getElementById('my_dic_all')
const my_list = document.getElementById('my_dic')
const checkbox = document.getElementById('button_check')
const myLisOrAllList = JSON.parse(localStorage.getItem('dicionario')) 
const buttonAlert = document.getElementById('button_alert_dicionario')


buttonAlert.addEventListener('click',()=>{
    const buttonRemove = buttonAlert.parentNode.parentNode
    buttonRemove.remove()
})

if (myLisOrAllList){
    checkbox.checked = true
}

checkbox.addEventListener('change',()=>{
    const dicionario = checkoutinput(checkbox)
    localStorage.setItem('dicionario', JSON.stringify(dicionario))
    randomIngles()
})


function checkoutinput(e){
    const check  = e.checked
    if (check){
        my_list_ativo()
    }else{
        my_list_all_ativo()
    }
    return check
}

function my_list_ativo(){
    my_list_all.style.color = 'white'
    my_list.style.color = 'red'
}

function my_list_all_ativo(){
    my_list.style.color = 'white'
    my_list_all.style.color = 'red'
}

checkoutinput(checkbox)
