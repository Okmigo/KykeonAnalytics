document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.global-nav');
    const toggle = document.querySelector('[data-chatbot-toggle]');
    const closeBtn = document.querySelector('[data-chatbot-close]');
    const chatbotWindow = document.querySelector('#chatbotWindow');

    if (nav) {
        const updateNavState = () => {
            if (window.scrollY > 40) {
                nav.classList.add('is-scrolled');
            } else {
                nav.classList.remove('is-scrolled');
            }
        };
        updateNavState();
        window.addEventListener('scroll', updateNavState, { passive: true });
    }

    const toggleChatbot = (forceState) => {
        if (!chatbotWindow || !toggle) {
            return;
        }
        const shouldOpen = typeof forceState === 'boolean' ? forceState : !chatbotWindow.classList.contains('active');
        chatbotWindow.classList.toggle('active', shouldOpen);
        toggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
        chatbotWindow.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
    };

    if (toggle) {
        toggle.addEventListener('click', () => toggleChatbot());
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => toggleChatbot(false));
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            toggleChatbot(false);
        }
    });

    document.addEventListener('click', (event) => {
        if (!chatbotWindow || !toggle) return;
        const isClickInside = chatbotWindow.contains(event.target) || toggle.contains(event.target);
        if (!isClickInside && chatbotWindow.classList.contains('active')) {
            toggleChatbot(false);
        }
    });
});
