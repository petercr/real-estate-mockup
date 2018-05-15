//Sidenav
const sideNav = document.querySelector(".sidenav");
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
const auto = document.querySelector(".autocomplete");
M.Autocomplete.init(auto, {
  data: {
    Brewster: null,
    Truro: null,
    Centerville: null,
    Barnstable: null,
    Orleans: null,
    Provincetown: null,
    Falmouth: null,
    Sandwich: null
  }
});

// Material boxes
const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

// Scrollspy
const ss = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(ss, {});

// base url for the Pixabay API
const url = `https://pixabay.com/api/`;

// zws-id key for calling the API
// This is my personal key, please don't use for your own projects
const pixabayKey = `?key=8789352-0779e605e98c37564675387fd`;

// basic address in Seattle copied from Zillow docs 
let searchItems = `&q=beach+house&image_type=photo`;


fetch((url + pixabayKey + searchItems), {mode: "no-cors"})
  .then(function(res) {
     return res.json();
  })
  .then(function (req){
    console.dir(req);
  });