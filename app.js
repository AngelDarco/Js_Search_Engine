  const text = document.getElementById('text');
    const result = document.querySelector('.result');
    const btn = document.getElementById('btn')

  document.addEventListener('DOMContentLoaded', () => {
      btn.addEventListener('click',()=>{
        validation(); 
  })
  })
  
  function validation(){
   arr = result.innerText.split(' ')
    arr2 = arr
    for(let i=0;i<arr.length; i++){
      arr2[i] = arr[i]
      if(arr[i].toLowerCase().includes(text.value.toLowerCase())){
            result.innerHTML = '';              
              arr2[i] = '<p>' + arr[i] + '</p>';
      }
    }
        for(let x=0; x<arr2.length; x++){
    result.innerHTML += arr2[x] + ' '
}
  }
