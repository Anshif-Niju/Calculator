function calc(val){
    document.getElementById('result').value+=val

}
function clearDisplay(){
    document.getElementById('result').value=''

}
function equalClick(){
    var text=document.getElementById('result').value
    resul=eval(text)
    document.getElementById('result').value=resul
}