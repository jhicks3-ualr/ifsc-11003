const toggleSwitch = document.querySelector('.theme-slider input[type="checkbox"]');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
    }

}

toggleSwitch.addEventListener('change', switchTheme, false);

$(document).ready(function() {

    $('.fade-container').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'ease-in-out',
      autoplay: true,
      autoplaySpeed: 7000
    });


});