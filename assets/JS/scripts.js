const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme")

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
    }

    toggleTheme.classList.toggle('bi-sun');
    toggleTheme.classList.toggle('bi-moon');
}


toggleTheme.addEventListener('click', changeTheme);


const toggleCard = (botao) => {

    const card = botao.nextElementSibling;
    

    const isOpen = card.classList.toggle('open');

    if (isOpen) {
        
        const projectCard = botao.closest('.project__card');
        
        
        projectCard.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center'     
        });
    }
};
