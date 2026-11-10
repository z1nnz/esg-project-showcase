// 只控制手機版導覽列的展開與收合；專題簡介使用 HTML 原生 details 下拉選單。
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', function () {
  nav.classList.toggle('is-open');
  const opened = nav.classList.contains('is-open');
  menuButton.setAttribute('aria-expanded', opened ? 'true' : 'false');
  menuButton.setAttribute('aria-label', opened ? '關閉選單' : '開啟選單');
});

nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
