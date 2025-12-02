// const closeBtn = document.querySelector(".close-btn");

// closeBtn.addEventListener("click", (e) => {
//   e.preventDefault(); // 혹시 다른 이벤트가 막는 걸 방지
//   window.location.href = "index.html"; // 강제로 이동
// });

$(function () {

    $(".img-item").css("transition", "transform 0.4s");
  
    $(".img-item > a, .img-item > img").on("mouseenter", function () {
      $(this).closest(".img-item").css("transform", "translateY(-150px)");
    });
  
    $(".img-item > a, .img-item > img").on("mouseleave", function () {
      $(this).closest(".img-item").css("transform", "translateY(0)");
    });
  
  });