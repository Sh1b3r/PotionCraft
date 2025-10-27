document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('themeswitcher');
    const body = document.body;
    const header = document.getElementById('header2');
    const body2 = document.getElementById('body21');
    const headertext = document.getElementById('headertext1');
    const logocontainer = document.getElementById('logo');
    const logoday = document.getElementById('logoday');
    const useractions = document.getElementById('authorization');
    const userLink = useractions?.querySelector('a');
    const potions = document.querySelectorAll('.card');

    const logoDaySrc = 'Glass_Bottle_JE2_BE2.webp';
    const logoNightSrc = 'Potion_of_Luck_JE3.png';

    if (logoday && !logoday.src) logoday.src = logoDaySrc;

    function toggleTheme() {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        body2.classList.toggle('dark-theme');
        body2.classList.toggle('light-theme');
        header.classList.toggle('dark-theme');
        header.classList.toggle('light-theme');
        headertext.classList.toggle('dark-theme');
        headertext.classList.toggle('light-theme');
        logocontainer.classList.toggle('dark-theme');
        logocontainer.classList.toggle('light-theme');
        useractions.classList.toggle('dark-theme');
        useractions.classList.toggle('light-theme');
        userLink?.classList.toggle('dark-theme');
        userLink?.classList.toggle('light-theme');

        potions.forEach(p => {
            p.classList.toggle('dark-theme');
            p.classList.toggle('light-theme');
        });

        if (logoday) {
            const current = logoday.src.split('/').pop();
            logoday.src = (current === logoDaySrc) ? logoNightSrc : logoDaySrc;
        }

        if (checkbox) checkbox.checked = body.classList.contains('dark-theme');
    }

    if (checkbox) {
        checkbox.checked = body.classList.contains('dark-theme');
        checkbox.addEventListener('change', toggleTheme);
    }

    logocontainer?.addEventListener('click', toggleTheme);
});

document.querySelectorAll('.card').forEach(card => {
  const video = card.querySelector('video');
  card.addEventListener('mouseenter', () => video.play());
  card.addEventListener('mouseleave', () => video.pause());
});