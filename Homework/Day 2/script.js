function runPopup() {
  window.alert('Submitted');
}
// add API
const url = 'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json';
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data));

const fetchBtn = document.getElementById('fetch-btn');
const tracksContainer = document.getElementById('playlist-wrap');

fetchBtn.addEventListener('click', () => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderNewCard(data);
      console.log(data);
    })
    .catch((err) => alert(err));
});
