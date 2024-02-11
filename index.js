const container = document.querySelector('.container');
const button = document.querySelector('.generate');

// can set pallettes to any amount you want

const colorPalettes = 9;


const generateColor = () =>{

container.innerHTML = '';

for(let i = 0; i <= colorPalettes; i++){


    let randomCode = Math.floor(Math.random()*0xffffff).toString(16);
    randomCode = `#${randomCode.padStart(6,'0')}`;
    
    
    const color = document.createElement('li');
    color.setAttribute('class', 'color');
  
    color.innerHTML = `   <div class="bg-color" style="background: ${randomCode}"></div>
    <span class="color-code">${randomCode}</span>`;


 


    // adding click event to copy color
    color.addEventListener('click',()=>{
// call backs function added

      copyColor(color,randomCode);
    })

    container.appendChild(color);  
    setTimeout(()=>{
      button.textContent = 'Generating';
          },100);
      
          // set time out for button text
          setTimeout(()=>{
      button.textContent = 'Generated';
      
          },500);
           setTimeout(()=>{
      button.textContent = 'Generate';
          },2000);  
  } 
}
generateColor();

    const copyColor = (elem, hexVal) => {
      const colorElement = elem.querySelector('.color-code');
      navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = 'Copied';
        setTimeout(()=>{
          colorElement.innerText = hexVal;
        }, 1000)
      }).catch(()=>{
        alert('failed to copy code');
      });

    }
  
    button.addEventListener('click', generateColor);








