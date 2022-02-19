const text = document.getElementById('text');
const result = document.querySelector('.result');
const btn = document.getElementById('btn')
let arr;
let arr2;
let arr3 = [];
let count = 0;
let val;
let final = []
let total = ''

let letter2 = '';
let letter3 = '';
let letter = '';
let txt;

document.addEventListener('DOMContentLoaded', () => {
  btn.addEventListener('click', () => {
    validation();
  })
})

function validation() {
  if (text.value == '' || txt == text.value) return
  let arr = result.innerText.split(' ')
  arr2 = arr;
  let val = text.value.toLowerCase().split('')
  
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
    if (arr[i].toLowerCase().includes(text.value.toLowerCase())) {
      arr2[i] = `<>${arr[i]}</>`;
    }
  }





    result.innerHTML = '';
  for (let x = 0; x < arr2.length; x++) {
    if (arr2[x].includes('<>')) {
      arr3[count] = arr2[x].split('')
      count++;
    }

    if (arr2[x].toLowerCase().includes(val.join(''))) {

      
      for (let m = 0; m < fin().length; m++) {
       // if (arr2[x].includes(fin()[m])) {
        console.log(arr3, arr3[m])

          
          letter = arr2[x].replace('<>', '').replace('</>', '').replace('<p>', '').replace('</p>', '');

          for (let a=0; a<letter.split('').length; a++){
             // if(fin()[m] == letter[a])
            letter2 += fin()[m];
            letter3 += letter[a]
            //console.log(fin()[m],letter[a], m, a)
          //total = letter.replace(letter3, `<p>${letter2}</p>`)

          }

          
         
          //console.log(letter, total, arr[x], fin()[m])
         
         arr2[x] = total;
          /* if (m  >= fin().length-1) {
            total = `<span>${arr2[x]}</span>`;
            arr2[x] = total;
          }  */

          
        //}
      }
      letter2 = '';
      letter3 = '';
      letter = '';
      total = '';
    }   

    if(arr2[x].includes('\n')) {
      this.text = arr2[x].split('');
      const res = this.text.filter(word => word != '\n');
      arr2[x] = res.join('');
   }
        result.innerHTML += arr2[x] + ' '
        txt = text.value;

        reset();
  }


} //End function




function reset(){
  arr = '';
  arr3 = [];
  count = 0;
  final = []
}

function fin() {
  let val = text.value.toLowerCase().split('')
    for (let j = 0; j < arr3.length; j++) {
      for (let k = 0; k < arr3[j].length; k++) {
        for (let l = 0; l < val.length; l++) {
          if (arr3[j][k].toLowerCase() == val[l]) {
            final[l] = val[l]
          }
        }
      }
    }
    return final
  }