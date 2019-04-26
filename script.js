document.title = 'hoge';
/*

let mo = new MutationObserver(() => {
  document.querySelector('.texture').style.backgroundColor='#073642';
  document.querySelector('.texture').style.background='url()';
  document.querySelector('.code').style.margin='10px';
  document.querySelector('.code').style.width='100%';

  let x = document.querySelectorAll('.code > span');
  for(var i = 0; i < x.length; i++) {
    if (x[i].className === 'c initial') {
      x[i].style.setProperty("color", "#657b83", "important");
    } else {
      //x[i].style.color='#93a1a1';
      x[i].style.color='#eee';
    }
  }
  let repeating = document.querySelector('.repeating');
  if (repeating) {
    repeating.parentNode.removeChild(repeating);
  }
  let finished = document.querySelector('.finished-main');
  if (finished) {
    console.log(document.querySelectorAll('.breakdown-inner > tbody > tr > .value'));
    let wpm = document.querySelectorAll('.breakdown-inner > tbody > tr > .value')[2].innerText;
    let next = document.querySelector('.next');
    finished.textContent = null;
    alert(wpm);
    if (next) {
      location.href = next.href;
    }
  }
});

let main = document.querySelector('#main');
mo.observe(main, { childList: true, subtree: true });
*/
