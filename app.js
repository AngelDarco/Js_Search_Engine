const text = document.getElementById('text');
const result = document.querySelector('.result');
const btn = document.getElementById('btn')

document.addEventListener('DOMContentLoaded', () => {
  btn.addEventListener('click', () => {
    validation();
  })
})

function validation() {
  if (text.value == '') return
  let arr = result.innerText.split(' ')
  let arr2 = arr;
  let arr3 = [];
  let count = 0;
  let val = text.value.toLowerCase().split('')
  let final = []
  let total = ''
  

  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i]
    if (arr[i].toLowerCase().includes(text.value.toLowerCase())) {
      arr2[i] = `<span>${arr[i]}</span>`;
    }
  }
  result.innerHTML = '';


  for (let x = 0; x < arr2.length; x++) {


    if (arr2[x].includes('<span>')) {
      arr3[count] = arr2[x].split('')
      count++;
    }


    let tetter2 = '';
    let letter3 = '';
    let lettter = '';

    if (arr2[x].toLowerCase().includes(val.join(''))) {
      for (let m = 0; m <= fin().length; m++) {
        if (arr2[x].includes(fin()[m])) {

          lettter = arr2[x].replace('<span>', '').replace('</span>', '').replace('<p>', '').replace('</p>', '');
          tetter2 += fin()[m];
          letter3 += lettter[m]

          console.log(lettter)
          total = lettter.replace(letter3, `<p>${tetter2}</p>`)
          
          arr2[x] = total;

          if (m  >= fin().length-1) {
            
            total = `<span>${arr2[x]}</span>`;
            arr2[x] = total

          }
          
        }
      }
    }
        result.innerHTML += arr2[x] + ' '
    
    text.value = '';
    //arr = '';
  }







  function fin() {
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
} //End function



