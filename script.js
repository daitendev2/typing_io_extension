document.title = 'develop';

let mo = new MutationObserver(() => {
  let finished = document.querySelector('.finished-main');
  if (finished) {
    let wpm = document.querySelectorAll('.breakdown-inner > tbody > tr > .value')[2].innerText;
    let next = document.querySelector('.next');
    mo.disconnect();
    score = 'wpm: ' + wpm;
    finished.textContent = score;
    if (next) {
      if (confirm(score)) {
        location.href = next.href;
      }
    }
  }
});

let main = document.querySelector('#main');
mo.observe(main, { childList: true, subtree: true });
