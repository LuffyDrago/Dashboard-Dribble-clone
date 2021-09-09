/*===== SHOW NAVBAR  =====*/
const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        bodypd = document.getElementById(bodyId),
        headerpd = document.getElementById(headerId)

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
        toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show')
                // change icon
            toggle.classList.toggle('bx-x')
                // add padding to body
            bodypd.classList.toggle('body-pd')
                // add padding to header
            headerpd.classList.toggle('body-pd')
        })
    }
}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

/*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink() {
    if (linkColor) {
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l => l.addEventListener('click', colorLink))


/*===== PROGRESS BAR =====*/
const progress_bars = document.querySelectorAll('.progress');
const progress_bar = document.querySelectorAll('.progress1');
const progress_bar2 = document.querySelectorAll('.progress2');


progress_bars.forEach(bar => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
});

progress_bar.forEach(bar => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
});

progress_bar2.forEach(bar => {
    const { size } = bar.dataset;
    bar.style.width = `${size}%`;
});

//     CALENDAR JS //
const date = new Date();
const monthDays = document.querySelector(".days");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

//Get current Month
document.querySelector(".date h1").innerHTML = months[date.getMonth()];


//Get current Date
document.querySelector(".date p").innerHTML = new Date().toDateString();