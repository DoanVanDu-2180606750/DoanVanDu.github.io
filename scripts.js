document.addEventListener('DOMContentLoaded', () => {
    const infoSection = document.getElementById('info');
    infoSection.addEventListener('click', () => {
        alert('You clicked the information section!');
    });

    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('click', () => {
        alert('You clicked the About Me section!');
    });
});
