function initTabNav(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    if(tabMenu.length && tabContent.length){
        tabContent[0].classList.add('ativo');

        function activeTab(index){
            tabContent.forEach((section) =>{
                section.classList.remove('ativo');
            });
            
            tabContent[index].classList.add('ativo', tabContent[index].dataset.anime);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    if(accordionList.length){
        accordionList[0].classList.add('ativo');
        accordionList[0].nextElementSibling.classList.add('ativo');

        function activeAccordion(){
            this.classList.toggle('ativo');
            this.nextElementSibling.classList.toggle('ativo');
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();


function initScrollSuave(){
    const linksinternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        /*forma alternativa
        const topo = section.offsetTop
        window.scrollTo({
            top: 1000,
            behavior: 'smooth'
        });*/
    }

    linksinternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    })
}
initScrollSuave();

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if(sections.length){
        const windowTam = window.innerHeight * 0.6;

        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - windowTam;
                if(sectionTop < 0){
                    section.classList.add('ativo');
                }
            });
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }
}
initAnimacaoScroll();


