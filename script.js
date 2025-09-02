function btn(val){
    let input = document.querySelector("#input").value+=val;
}
function calc(){
   let input= document.querySelector("#input").value;
   let val=eval(input);
   document.querySelector('#input').value=val;
}
function cl(){
  let input=  document.getElementById('input').value=innerHtml="";
//   let val= input.innerHtml="";
//   document.querySelector("#input").value=val;

}
function x2(){
    let input = document.getElementById('input').value;
    let val = input**2
    document.getElementById('input').value=val;
}
function x3(){
  let input=parseInt(document.getElementById('input').value);
  let val = input**3;
  document.getElementById('input').value=val;
}