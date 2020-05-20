var mobileNavBTN = document.querySelector('#mobile-nav-btn');
var mobileNavBTNclose = document.querySelector('#mobile-nav-btn-closed');
var navigationList = document.querySelector('.mainnav');

mobileNavBTN.addEventListener('click', function() {
    navigationList.classList.remove('mainnav-closed');
    console.log(navigationList.classList);
})

mobileNavBTNclose.addEventListener('click', function() {
    navigationList.classList.add('mainnav-closed');
    console.log(navigationList.classList);
})



    //nav bar 

    var navBrandingBtn = document.querySelector('#navBrandingBtn')
    var navWebsitesBtn = document.querySelector('#navWebsitesBtn')

    var brandingDropdown = document.querySelector('#brandingDropdown')
    var websitesDropdown = document.querySelector ('#websitesDropdown')

    navBrandingBtn.addEventListener('click', function(){
        
    })

    navWebsitesBtn.addEventListener('click', function(){
        brandingDropdown.classList.add('dropdown-closed');
        websitesDropdown.classList.remove('dropdown-closed');
    })

    




