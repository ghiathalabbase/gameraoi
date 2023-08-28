
let li = document.querySelector('header nav > ul > li:last-child')
let menu = document.querySelector('header nav > ul > li:last-child .mega-menu');
li.onclick = function () {
  if (li.classList.contains('open')) {
    menu.style.cssText = 'opacity: 1; top: 100%; z-index: 2;'
    li.classList.remove('open')
  } else {
    menu.style.cssText = 'opacity: 0; top: calc(100% + 50px); z-index: -1;'
    this.classList.add('open')
  }
}