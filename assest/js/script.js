var mobileBar = document.querySelector(".bar-container .search-bar");
var searchBar = document.querySelector(".bar-container");
var currentHeight = searchBar.clientHeight;
var menuItem = document.querySelectorAll(".bar-container li a");

// Đóng mở mobile menu
mobileBar.onclick = function() {
    var isClosed = searchBar.offsetHeight === currentHeight;
    if (isClosed) { 
        searchBar.style.height = "auto";
    } else {
        searchBar.style.height = null;
    }
}
// tự động đóng menu 
for (var i = 0; i < menuItem.length; i++) {     
    menuItem[i].onclick = function(event) { 
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('sub-item');
        if (isParentMenu) { 
            event.preventDefault();
        } else {
            searchBar.style.height = null;

        }
    }
}
