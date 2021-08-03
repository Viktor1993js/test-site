 let timer = setInterval(() => {
    let my_timer = document.getElementById("timer");
    let time = my_timer.innerHTML;
    let arr = time.split(":");
    let m = arr[0];
    let s = arr[1];
    if (s == 0) {
      if (m == 0) {
          clearTimeout(timer);
          return;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("timer").innerHTML = " " + m+":"+s;
}, 1000)

let img = function () {
  let img = document.querySelectorAll('#img');
  let square = document.querySelectorAll('#square');
  
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", () => {
      for (let i = 0; i < img.length; i++) {
        square[i].style.opacity = 1;
      }
      img[i].addEventListener("mouseout", () => {
        for (let i = 0; i < img.length; i++) {
          square[i].style.opacity = 0;
        }
      })
    })
    
  }
}

let choco = function () {
  let choco = document.querySelectorAll('#choco');
  let square = document.querySelectorAll('#choco-square');
  
  for (let i = 0; i < choco.length; i++) {
    choco[i].addEventListener("mouseover", () => {
      for (let i = 0; i < choco.length; i++) {
        square[i].style.opacity = 1;
      }
      choco[i].addEventListener("mouseout", () => {
        for (let i = 0; i < choco.length; i++) {
          square[i].style.opacity = 0;
        }
      })
    })
  }
  
}

choco();
img();

setInterval(() => {
start();
}, 2000)

function start () {
  let circles = document.querySelectorAll('.circle-box__circle');
  let choco = document.querySelector('.choco-container__box');
    choco.style.transform = "translateX(-100vw)";
}


    
