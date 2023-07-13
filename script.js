const swipeArea = document.querySelector(".sidebar-wrap .swipe-area, .sidebar-wrap .sidebar"),
  sidebarWrap = document.querySelector(".sidebar-wrap"),
  sidebar = document.querySelector(".sidebar");

swipeArea.addEventListener("touchstart", swipeBar());

var touch, swipeX;

function swipeBar() {
  swipeArea.addEventListener("touchmove", function(event) {

    event.preventDefault();

    touch = event.touches[0];
    swipeX = Math.floor(touch.clientX);

    if(swipeX > 300) {
      swipeX = 300;
      sidebar.style.left = 0 + "px";
    } else if(swipeX < 0) {
      swipeX = 0;
      sidebar.style.left = -300 + "px";
    } else {
      sidebar.style.left = swipeX - 300 + "px";
    }

  });
}

swipeArea.addEventListener("touchend", function(event) {
  // console.log(sidebar.style.left);
  if(swipeX > 180) {
    sidebar.style.left = 0 + "px";
  } else if(swipeX < 180) {
    sidebar.style.left = -300 + "px";
  }

  if(swipeX > 300) {
    sidebar.style.left = 0 + "px";
  } else if (swipeX < 0) {
    sidebar.style.left = -300 + "px";
  }
});