const item = document.querySelector('#item1');

item.addEventListener('mouseenter', () => {
  item.classList.add('active');
});

item.addEventListener('mouseleave', () => {
  item.classList.remove('active');
});

