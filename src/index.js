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

// base url for the Zillow API
const url = `http://www.zillow.com/webservice/GetSearchResults.htm?`;

// zws-id key for calling the API
// This is my personal key, please don't use for your own projects
const zwsId = `zws-id=X1-ZWz1gdyz30wvt7_5rw5j&`;

// basic address in Seattle copied from Zillow docs 
let basicAddress = `address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA`;

const headers = 

fetch((url + zwsId + basicAddress), {mode: "no-cors"})
  .then(req => req.json())
  .then(function (res){
    console.log(res);
  })
  .catch(error => console.error(error))