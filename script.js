document.title = 'hoge';

let mo = new MutationObserver(() => {

/*
  let x = document.querySelectorAll('.code > span');
  for(var i = 0; i < x.length; i++) {
    if (x[i].className === 'c initial') {
      x[i].style.setProperty("color", "#657b83", "important");
    } else {
      x[i].style.color='#eee';
    }
  }
*/
  let finished = document.querySelector('.finished-main');
  if (finished) {
    let wpm = document.querySelectorAll('.breakdown-inner > tbody > tr > .value')[2].innerText;
    let next = document.querySelector('.next');
    finished.textContent = null;
    if confirm(wpm) {
      location.href = next.href;
    }
  }
});

let main = document.querySelector('#main');
mo.observe(main, { childList: true, subtree: true });
