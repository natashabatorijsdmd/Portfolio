var mobileNavBTN = document.querySelector('#mobile-nav-btn');
var mobileNavBTNclose = document.querySelector('#mobile-nav-btn-closed');
var navigationList = document.querySelector('.mainnav');

mobileNavBTN.addEventListener('click', function () {
    navigationList.classList.remove('mainnav-closed');
    console.log(navigationList.classList);
})

mobileNavBTNclose.addEventListener('click', function () {
    navigationList.classList.add('mainnav-closed');
    console.log(navigationList.classList);
})



//nav bar 

var navBrandingBtn = document.querySelector('#navBrandingBtn')
var navWebsitesBtn = document.querySelector('#navWebsitesBtn')
var navBlogBtn = document.querySelector('#navBlogBtn')
var navContactBtn = document.querySelector('#navContactBtn')

var brandingDropdown = document.querySelector('#brandingDropdown')
var websitesDropdown = document.querySelector('#websitesDropdown')
var blogDropdown = document.querySelector('#blogDropdown')

navBrandingBtn.addEventListener('click', function () {
    if (!websitesDropdown.classList.contains('dropdown-closed')) {
        websitesDropdown.classList.add('dropdown-closed');
        navWebsitesBtn.classList.remove('navPageTriggersActive');
    } else if (!blogDropdown.classList.contains('dropdown-closed')) {
        blogDropdown.classList.add('dropdown-closed');
        navBlogBtn.classList.remove('navPageTriggersActive');
    } else if (!contactDropdown.classList.contains('dropdown-closed')) {
        contactDropdown.classList.add('dropdown-closed');
        navContactBtn.classList.remove('navPageTriggersActive');}

    brandingDropdown.classList.remove('dropdown-closed');
    navBrandingBtn.classList.add('navPageTriggersActive');
})

navWebsitesBtn.addEventListener('click', function () {
    if (!brandingDropdown.classList.contains('dropdown-closed')) {
        brandingDropdown.classList.add('dropdown-closed');
        navBrandingBtn.classList.remove('navPageTriggersActive');
    } else if (!blogDropdown.classList.contains('dropdown-closed')) {
        blogDropdown.classList.add('dropdown-closed');
        navBlogBtn.classList.remove('navPageTriggersActive');
    } else if (!contactDropdown.classList.contains('dropdown-closed')) {
        contactDropdown.classList.add('dropdown-closed');
        navContactBtn.classList.remove('navPageTriggersActive');}

    websitesDropdown.classList.remove('dropdown-closed');
    navWebsitesBtn.classList.add('navPageTriggersActive');
})

navBlogBtn.addEventListener('click', function () {
    if (!brandingDropdown.classList.contains('dropdown-closed')) {
        brandingDropdown.classList.add('dropdown-closed');
        navBrandingBtn.classList.remove('navPageTriggersActive');
    } else if (!websitesDropdown.classList.contains('dropdown-closed')) {
        websitesDropdown.classList.add('dropdown-closed');
        navWebsitesBtn.classList.remove('navPageTriggersActive');
    } else if (!contactDropdown.classList.contains('dropdown-closed')) {
        contactDropdown.classList.add('dropdown-closed');
        navContactBtn.classList.remove('navPageTriggersActive');}

    blogDropdown.classList.remove('dropdown-closed');
    navBlogBtn.classList.add('navPageTriggersActive');
})

navContactBtn.addEventListener('click', function () {
    if (!brandingDropdown.classList.contains('dropdown-closed')) {
        brandingDropdown.classList.add('dropdown-closed');
        navBrandingBtn.classList.remove('navPageTriggersActive');
    } else if (!websitesDropdown.classList.contains('dropdown-closed')) {
        websitesDropdown.classList.add('dropdown-closed');
        navWebsitesBtn.classList.remove('navPageTriggersActive');
    } else if (!blogDropdown.classList.contains('dropdown-closed')) {
        blogDropdown.classList.add('dropdown-closed');
        navBlogBtn.classList.remove('navPageTriggersActive');}

    contactDropdown.classList.remove('dropdown-closed');
    navContactBtn.classList.add('navPageTriggersActive');
})



console.log('hello')

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 





