export const CloseModalForce = (event) => {
    function f() {
        document.querySelector(".modal-backdrop").remove()
        document.body.classList.remove('modal-open');
        document.body.classList.add('overflow-auto');
    }
    setTimeout(f, 0)
}
