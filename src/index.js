

//Sidenav
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Image Slider
const slider = document.querySelector(".slider");

M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 500,
    interval: 4000
});

// Autocomplete 
const auto = document.querySelector('.autocomplete');
M.Autocomplete.init(auto, {
    data: {
        "Brewster": null,
        "Truro": null,
        "Centerville": null,
        "Barnstable": null,
        "Orleans": null,
        "Provincetown": null,
        "Falmouth": null,
        "Sandwich": null,
    }
})