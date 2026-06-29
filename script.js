console.log("Portfolio iniciado");

// ================================
// MENU HAMBURGUER
// ================================

const hamburger = document.getElementById('hamburger');
const menu      = document.getElementById('menu');

// Abre/fecha o menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('aberto');
    menu.classList.toggle('aberto');
    // Trava o scroll quando o menu está aberto
    document.body.style.overflow = menu.classList.contains('aberto') ? 'hidden' : '';
});

// Fecha ao clicar em qualquer link do menu
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('aberto');
        menu.classList.remove('aberto');
        document.body.style.overflow = '';
    });
});

// Fecha ao redimensionar para desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('aberto');
        menu.classList.remove('aberto');
        document.body.style.overflow = '';
    }
});

// =====================
// MODAL SOBRE MIM
// =====================
const openBtn  = document.getElementById('openAboutModal');
const closeBtn = document.getElementById('closeAboutModal');
const modal    = document.getElementById('aboutModal');

openBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => fecharModal());

modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) fecharModal();
});

function fecharModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// MODAL KRYVAR + CARROSSEL
// ================================
const btnVerMaisKryvar = document.querySelector('#kryvar .project-link:last-child');
const modalKryvar      = document.getElementById('modalKryvar');
const closeModalKryvar = document.getElementById('closeModalKryvar');

btnVerMaisKryvar.addEventListener('click', (e) => {
    e.preventDefault();
    modalKryvar.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModalKryvar.addEventListener('click', () => fecharModalKryvar());
modalKryvar.addEventListener('click', (e) => { if (e.target === modalKryvar) fecharModalKryvar(); });
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalKryvar.classList.contains('active')) fecharModalKryvar();
});

function fecharModalKryvar() {
    modalKryvar.classList.remove('active');
    document.body.style.overflow = '';
}

const thumbsKryvar  = document.querySelectorAll('#carouselKryvar .thumb');
const mainImgKryvar = document.getElementById('carouselKryvarImg');
const prevKryvar    = document.querySelector('#carouselKryvar .prev');
const nextKryvar    = document.querySelector('#carouselKryvar .next');
let currentKryvar   = 0;

const imagesKryvar = [
    { src: 'screenshots/home.jpg',        alt: 'Home' },
    { src: 'screenshots/calendar.jpg',    alt: 'Calendário' },
    { src: 'screenshots/notas.jpg',       alt: 'Notas' },
    { src: 'screenshots/modalCiclo.jpg',  alt: 'Modal Ciclo' },
    { src: 'screenshots/modalfinanc.jpg', alt: 'Financeiro' },
];

function setSlideKryvar(index) {
    currentKryvar = (index + imagesKryvar.length) % imagesKryvar.length;
    mainImgKryvar.src = imagesKryvar[currentKryvar].src;
    mainImgKryvar.alt = imagesKryvar[currentKryvar].alt;
    thumbsKryvar.forEach(t => t.classList.remove('active'));
    thumbsKryvar[currentKryvar].classList.add('active');
}

thumbsKryvar.forEach((thumb, i) => thumb.addEventListener('click', () => setSlideKryvar(i)));
prevKryvar.addEventListener('click', () => setSlideKryvar(currentKryvar - 1));
nextKryvar.addEventListener('click', () => setSlideKryvar(currentKryvar + 1));

// ================================
// MODAL ZYROSCORE + CARROSSEL
// ================================
const btnVerMaisZyro = document.querySelector('#zyroscore .project-link:last-child');
const modalZyro      = document.getElementById('modalZyro');
const closeModalZyro = document.getElementById('closeModalZyro');

btnVerMaisZyro.addEventListener('click', (e) => {
    e.preventDefault();
    modalZyro.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModalZyro.addEventListener('click', () => fecharModalZyro());
modalZyro.addEventListener('click', (e) => { if (e.target === modalZyro) fecharModalZyro(); });
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalZyro.classList.contains('active')) fecharModalZyro();
});

function fecharModalZyro() {
    modalZyro.classList.remove('active');
    document.body.style.overflow = '';
}

const thumbsZyro  = document.querySelectorAll('#carouselZyro .thumb');
const mainImgZyro = document.getElementById('carouselZyroImg');
const prevZyro    = document.querySelector('#carouselZyro .prev');
const nextZyro    = document.querySelector('#carouselZyro .next');
let currentZyro   = 0;

const imagesZyro = [
    { src: 'screenshots/homeZyro.jpg', alt: 'Home' },
    { src: 'screenshots/truco.jpg',    alt: 'Truco' },
    { src: 'screenshots/cacheta.jpg',  alt: 'Cacheta' },
    { src: 'screenshots/buraco.jpg',   alt: 'Buraco' },
    { src: 'screenshots/tranca.jpg',   alt: 'Tranca' },
];

function setSlideZyro(index) {
    currentZyro = (index + imagesZyro.length) % imagesZyro.length;
    mainImgZyro.src = imagesZyro[currentZyro].src;
    mainImgZyro.alt = imagesZyro[currentZyro].alt;
    thumbsZyro.forEach(t => t.classList.remove('active'));
    thumbsZyro[currentZyro].classList.add('active');
}

thumbsZyro.forEach((thumb, i) => thumb.addEventListener('click', () => setSlideZyro(i)));
prevZyro.addEventListener('click', () => setSlideZyro(currentZyro - 1));
nextZyro.addEventListener('click', () => setSlideZyro(currentZyro + 1));

document.getElementById('btnAcessarTesteZyro').addEventListener('click', (e) => {
    e.preventDefault();
    fecharModalZyro();
    document.getElementById('modalTeste').classList.add('active');
    document.body.style.overflow = 'hidden';
});

// ================================
// MODAL INSTRUÇÕES TESTE
// ================================
const modalTeste      = document.getElementById('modalTeste');
const closeModalTeste = document.getElementById('closeModalTeste');
const btnTesteCard    = document.querySelector('#zyroscore .project-link:first-child');

btnTesteCard.addEventListener('click', (e) => {
    e.preventDefault();
    modalTeste.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModalTeste.addEventListener('click', () => fecharModalTeste());
modalTeste.addEventListener('click', (e) => { if (e.target === modalTeste) fecharModalTeste(); });
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalTeste.classList.contains('active')) fecharModalTeste();
});

function fecharModalTeste() {
    modalTeste.classList.remove('active');
    document.body.style.overflow = '';
}

// ================================
// PROJETOS DE ESTUDO — MODAIS + CARROSSEIS + VER MAIS
// ================================

// BOTÃO VER MAIS
const btnVerMaisEstudos = document.getElementById('btnVerMaisEstudos');
const cardsOcultos      = document.querySelectorAll('.study-hidden');

btnVerMaisEstudos.addEventListener('click', () => {
    const aberto = btnVerMaisEstudos.classList.toggle('aberto');
    cardsOcultos.forEach(card => card.classList.toggle('visible', aberto));
    btnVerMaisEstudos.innerHTML = aberto
        ? 'Ver menos <i class="fa-solid fa-chevron-down"></i>'
        : 'Ver mais projetos <i class="fa-solid fa-chevron-down"></i>';
});

// ABRIR MODAIS DE ESTUDO
document.querySelectorAll('.open-study-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = btn.getAttribute('data-modal');
        const m = document.getElementById(modalId);
        if (m) {
            m.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// FECHAR MODAIS DE ESTUDO
document.querySelectorAll('.close-study-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const m = btn.closest('.modal-overlay');
        fecharModalEstudo(m);
    });
});

document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', (e) => {
        if (e.target === m) fecharModalEstudo(m);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.active').forEach(m => fecharModalEstudo(m));
    }
});

function fecharModalEstudo(m) {
    if (m) {
        m.classList.remove('active');
        document.body.style.overflow = '';
        m.querySelectorAll('video').forEach(v => v.pause());
    }
}

// CARROSSEIS DOS MODAIS DE ESTUDO
function initCarrossel(carouselId, imgId, images) {
    const carousel = document.getElementById(carouselId);
    if (!carousel) return;

    const thumbs  = carousel.querySelectorAll('.thumb');
    const mainImg = document.getElementById(imgId);
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let current   = 0;

    function setSlide(index) {
        current = (index + images.length) % images.length;
        mainImg.src = images[current].src;
        mainImg.alt = images[current].alt;
        thumbs.forEach(t => t.classList.remove('active'));
        if (thumbs[current]) thumbs[current].classList.add('active');
    }

    thumbs.forEach((thumb, i) => thumb.addEventListener('click', () => setSlide(i)));
    if (prevBtn) prevBtn.addEventListener('click', () => setSlide(current - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => setSlide(current + 1));
}

initCarrossel('carouselEstudo1', 'carouselEstudo1Img', [
    { src: 'screenshots/homeConce.png',   alt: 'Home Concessionária' },
    { src: 'screenshots/listarConce.png', alt: 'Listar Concessionária' },
]);

initCarrossel('carouselEstudo2', 'carouselEstudo2Img', [
    { src: 'screenshots/homeFilme.png',   alt: 'Home Filmes' },
    { src: 'screenshots/listarFilme.png', alt: 'Listar Filmes' },
    { src: 'screenshots/loginFilme.png',  alt: 'Login Filmes' },
]);

initCarrossel('carouselEstudo6', 'carouselEstudo6Img', [
    { src: 'screenshots/forca1.png', alt: 'Forca 1' },
    { src: 'screenshots/forca2.png', alt: 'Forca 2' },
    { src: 'screenshots/forca3.png', alt: 'Forca 3' },
]);

initCarrossel('carouselEstudo7', 'carouselEstudo7Img', [
    { src: 'screenshots/pong1.png', alt: 'Pong 1' },
    { src: 'screenshots/pong2.png', alt: 'Pong 2' },
]);