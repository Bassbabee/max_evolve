const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const arcTime = (totalTime / 5) * 2;
const bottomTime = (totalTime / 5);

rotateAnimation();

function rotateAnimation () {
  text.innerHTML = 'Look!';
  container.className = 'container grow';

  setTimeout(() => {
    text.innerText = 'Observe!';

    setTimeout(() => {
      text.innerText = 'Analyze!';
      container.className = 'container shrink';
    }, bottomTime);
  }, arcTime);
}

setInterval(rotateAnimation, totalTime);
