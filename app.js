const itemAC = document.getElementById('item-AC');
const itemDel = document.querySelector('#item-DEL');
const itemDiv = document.querySelector('#item-div');
const item1 = document.querySelector('#item-1');
const item2 = document.querySelector('#item-2');
const item3 = document.querySelector('#item-3');
const itemMulti = document.querySelector('#item-multi');
const item4 = document.querySelector('#item-4');
const item5 = document.querySelector('#item-5');
const item6 = document.querySelector('#item-6');
const itemAdd = document.querySelector('#item-add');
const item7 = document.querySelector('#item-7');
const item8 = document.querySelector('#item-8');
const item9 = document.querySelector('#item-9');
const itemAbs = document.querySelector('#item-abs');
const itemDot = document.querySelector('#item-dot');
const item0 = document.querySelector('#item-0');
const itemEqual = document.querySelector('#item-equal');
const show = document.querySelector('#show');
const write = document.querySelector('#write');

let num1 = '';
let num2 = '';

item1.addEventListener('click', getValue)
item2.addEventListener('click', getValue)
item3.addEventListener('click', getValue)
item4.addEventListener('click', getValue)
item5.addEventListener('click', getValue)
item6.addEventListener('click', getValue)
item7.addEventListener('click', getValue)
item8.addEventListener('click', getValue)
item9.addEventListener('click', getValue)
item0.addEventListener('click', getValue)
itemDot.addEventListener('click', getValue)
itemMulti.addEventListener('click', getValue)
itemDiv.addEventListener('click', getValue)
itemAbs.addEventListener('click', getValue)
itemAdd.addEventListener('click', getValue)
itemAC.addEventListener('click', ac);
itemDel.addEventListener('click', del );



function getValue(e){
    num1 += e.target.textContent;
    write.textContent = num1;

  }


  function ac(){
      show.textContent = '';
      write.textContent = '';
      num1 = '';
      num2 = '';
  }

  function del(){
      num1 = num1.slice(0, -1);
      write.textContent = num1;
  }




