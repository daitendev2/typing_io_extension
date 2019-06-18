document.title = 'shiftcmdf';

let mo = new MutationObserver(() => {
  let finished = document.querySelector('.finished-main');
  if (finished) {
    let wpm = document.querySelectorAll('.breakdown-inner > tbody > tr > .value')[2].innerText;
    let next = document.querySelector('.next');
    score = 'wpm: ' + wpm;
    finished.innerHTML = score;
    mo.disconnect();
    if (next) {
      if (confirm(score)) {
        location.href = next.href;
      }
      finished.innerHTML = '<a href="' + next.href + '">' + score + '</a>';
    }
  }
});

let main = document.querySelector('#main');
mo.observe(main, { childList: true, subtree: true });
