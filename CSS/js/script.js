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

const carouselSlide = document.querySelector('.carouselSlide');
const carouselImages = document.querySelectorAll('.carouselSlide img');
const websitesDescription = document.querySelector('.websitesDescription');
const websitesText = document.querySelectorAll('.websitesDescription p');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners
nextBtn.addEventListener('click', () => {

//stops it from going white if clicked too fast
if(counter >= carouselImages.length - 1) return
carouselSlide.style.transition = "transform 0.4s ease-in-out"
counter++;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {

//stops it from going white if clicked too fast
if(counter <= 0) return;
carouselSlide.style.transition = "transform 0.4s ease-in-out"
counter--;
carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

//loop it back to the first one
carouselSlide.addEventListener('transitionend', ()=>{
if(carouselImages[counter].id === 'lastClone'){
carouselSlide.style.transition = "none";
counter = carouselImages.length - 2;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
if(carouselImages[counter].id === 'firstClone'){
carouselSlide.style.transition = "none";
counter = carouselImages.length - counter;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
});


// description

//counter
const textSize = websitesText[0].clientWidth;
websitesDescription.style.transform = 'translateX(' + (-textSize * counter) + 'px)';

//Button listeners
nextBtn.addEventListener('click', () => {
websitesDescription.style.transition = "transform 0.4s ease-in-out"
counter++;
websitesDescription.style.transform = 'translateX(' + (-textSize * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {

//stops it from going white if clicked too fast
if(counter <= 0) return;
websitesDescription.style.transition = "transform 0.4s ease-in-out"
counter--;
websitesDescription.style.transform = 'translateX(' + (-textSize * counter ) + 'px)';
});

//loop it back to the first one 
carouselSlide.addEventListener('transitionend', ()=>{
if(websitesText[counter].id === 'lastClone'){
websitesDescription.style.transition = "none";
counter = websitesText.length - 2;
websitesDescription.style.transform = 'translateX(' + (-textSize * counter) + 'px)';
}
if(carouselImages[counter].id === 'firstClone'){
websitesDescription.style.transition = "none";
counter = websitesText.length - counter;
websitesDescription.style.transform = 'translateX(' + (-textSize * counter) + 'px)';
}
});






