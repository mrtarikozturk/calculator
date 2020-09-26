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

let num = '';
let total = 0;

item1.addEventListener('click', calculate)
item2.addEventListener('click', calculate)
item3.addEventListener('click', calculate)
item4.addEventListener('click', calculate)

item5.addEventListener('click', calculate)
item6.addEventListener('click', calculate)
item7.addEventListener('click', calculate)
item8.addEventListener('click', calculate)
item9.addEventListener('click', calculate)
item0.addEventListener('click', calculate)
itemDot.addEventListener('click', calculate)
itemMulti.addEventListener('click', calculate)
itemDiv.addEventListener('click', calculate)
itemAbs.addEventListener('click', calculate)
itemAdd.addEventListener('click', calculate)
itemEqual.addEventListener('click', calculate)

itemAC.addEventListener('click', ac);
itemDel.addEventListener('click', del );





function calculate(e){

    getValue(e);

    if (e.target.className == 'item notFirst' || e.target.id == 'item-equal') {
        if (total != 0) {
            switch (show.textContent.charAt(show.textContent.length-1)) {
                case '+':
                    total += Number(num.slice(0, -1));
                    
                    break;
                case '-':
                    total -= Number(num.slice(0, -1));
                    
                    break;
                case '*':
                    total *= Number(num.slice(0, -1));
                    
                    break;
                case '÷':
                    total /= Number(num.slice(0, -1));
                    
                    break;
            }
        }else{
            total = Number(num.slice(0, -1));
        }
    
        num = '';
    
        switch (e.target.id) {
            case 'item-add':
                shower(total.toString() + '+', num);
                break;
            case 'item-abs':
                shower(total.toString() + '-', num);
                break;
            case 'item-multi':
                shower(total.toString() + '*', num);            
                break;
            case 'item-div':
                shower(total.toString() + '÷', num);            
                break;
            case 'item-equal':
                if (total != 0) {
                    write.textContent = total.toString();
                    show.textContent = '';
                }
                break;
        }
    
    }else{
        write.textContent = num;
    }







    

}

function getValue(e){
    if (num === '' && e.target.className == 'item notFirst') {
        return;
    }else if (num != '' && e.target.className == 'item notFirst') {
        num += e.target.textContent;
        // total = num;
        // num = '';        
        // shower(total, num);
    }else if (e.target.id == 'item-dot' && num == '') {
        return;
    }else if(e.target.id == 'item-dot' && num.includes('.')){
       return ;
    }else if(num.indexOf(0) == '0' && num.length == 1){
        if (e.target.id == 'item-0') {
            return
        }else if(e.target.id == 'item-dot'){
            num += e.target.textContent;
            // write.textContent = num;
        }else{
            num = e.target.textContent;
            // write.textContent = num;
        }
    }else if(e.target.id == 'item-equal'){
        return ;
     }else{
        num += e.target.textContent;
        // write.textContent = num;
        
    }
  }


  function ac(){
      show.textContent = '';
      write.textContent = '';
      num = '';
      total = '';
  }

  function del(){
      
      write.textContent = write.textContent.slice(0, -1)
      num = write.textContent;
  }

  function shower(num1, num2){
    show.textContent = num1;
    write.textContent = num2;
  }




