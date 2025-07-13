const header = document.getElementById('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add('hidden'); // 下にスクロール → 隠す
    } else {
    header.classList.remove('hidden'); // 上にスクロール → 表示
    }
    lastScrollY = currentScrollY;
  });
