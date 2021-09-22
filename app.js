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
    })
      img[i].addEventListener("mouseout", () => {
        for (let i = 0; i < img.length; i++) {
          square[i].style.opacity = 0;
        }
    })
  }
}

let choco = function () {
  let choco = document.querySelectorAll('#choco');
  let img = document.querySelectorAll('#img');
  let square = document.querySelectorAll('#choco-square');
  let squareRight = document.querySelectorAll('#square');
  
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
  
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", () => {
      for (let i = 0; i < img.length; i++) {
        squareRight[i].style.opacity = 1;
      }
      img[i].addEventListener("mouseout", () => {
        for (let i = 0; i < img.length; i++) {
          squareRight[i].style.opacity = 0;
        }
      })
    })
  }
}

let chocoRight = function () {
  let img = document.querySelectorAll('#img');
  let squareRight = document.querySelectorAll('#square');
  
  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener("mouseover", () => {
      for (let i = 0; i < img.length; i++) {
        squareRight[i].style.opacity = 1;
      }
      img[i].addEventListener("mouseout", () => {
        for (let i = 0; i < img.length; i++) {
          squareRight[i].style.opacity = 0;
        }
      })
    })
  }
}

img();
choco();
chocoRight();


    
