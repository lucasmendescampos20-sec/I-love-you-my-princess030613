for(let i=0; i<20; i++){
  let heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (3 + Math.random() * 5) + 's';
  heart.style.fontSize = (15 + Math.random()*30) + 'px';
  heart.innerText = '❤️';
  document.body.appendChild(heart);
}