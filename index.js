const from = document.getElementById("from");
const to = document.getElementById("to");
const inputNumber = document.getElementById("input-number");
const resultBox = document.getElementById("result-box");

document.getElementById("convert").addEventListener("click", ()=>{
    let fromValue = from.value;
    let toValue = to.value;
    let inputValue = inputNumber.value;
    let result = convertBase(fromValue, toValue, inputValue);
    resultBox.innerText = result;
})
function convertBase(fromBase, toBase, num){
    let d = parseInt(num,fromBase) //converting number into base10

    let res = d.toString(toBase) // converting base10 to required base
    return res;
}
document.getElementById("swap").addEventListener("click", ()=>{
    // grab value from "from"
    let tmp = from.value
    from.value = to.value;
    to.value = tmp;
})