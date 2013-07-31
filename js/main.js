function toggleMobileNavigation(e){
	e.preventDefault();
	document.querySelector("body").classList.toggle("navon");
}

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector(".hamburger a").addEventListener('click', toggleMobileNavigation);

});