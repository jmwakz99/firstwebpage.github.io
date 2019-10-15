const imageSF = document.querySelectorAll('.trip-image');
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

function openModal() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}
function closeModal() {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}
for (let i = 0; i < imageSF.length; i++) {
    imageSF[i].addEventListener('click', openModal);

}
backdrop.addEventListener('click', closeModal);

