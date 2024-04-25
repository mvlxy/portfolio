function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});

// janela modal
// ! arrumar estilo
function mostrarModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// fechar a janela modal
function fecharModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// evento de clique nos links de navegação
const links = document.querySelectorAll('.link a');
links.forEach(link => {
    link.addEventListener('click', () => {
        mostrarModal();
    });
});

// modal quando scroll (teste)
function mostrarModalNoScroll() {
    var modal = document.getElementById('modal');
    var scrollPosition = window.scrollY; // posição atual do scroll

    var triggerPosition = 500;

    // ver se a posição do scroll atingiu ou ultrapassou a posição desejada
    if (scrollPosition >= triggerPosition) {
        modal.style.display = 'block'; // mostra o modal
    } else {
        modal.style.display = 'none'; // tira o modal
    }
}

// add evento de scroll ao documento
window.addEventListener('scroll', mostrarModalNoScroll);
