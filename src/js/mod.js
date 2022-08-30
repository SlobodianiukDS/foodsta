(() => {
  const refs = {
    openModalBtnHead: document.querySelector("[data-modal-open1]"),
    openModalBtnHero: document.querySelector("[data-modal-open2]"),
    openModalBtnOffer: document.querySelector("[data-modal-open3]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    body: document.querySelector("[data-page]"),
  };

  refs.openModalBtnHead.addEventListener("click", toggleModal);
  refs.openModalBtnHero.addEventListener("click", toggleModal);
  refs.openModalBtnOffer.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
  }
})();
