// Toggle the mobile menu
const menuToggle = document.querySelector('[data-collapse-toggle="mega-menu-full"]');
const megaMenuFull = document.getElementById('mega-menu-full');

menuToggle.addEventListener('click', function() {
    megaMenuFull.classList.toggle('hidden');
});

// Toggle the dropdown inside the menu
const dropdownToggle = document.querySelector('[data-collapse-toggle="mega-menu-full-dropdown"]');
const megaMenuFullDropdown = document.getElementById('mega-menu-full-dropdown');

dropdownToggle.addEventListener('click', function() {
    megaMenuFullDropdown.classList.toggle('hidden');
});
