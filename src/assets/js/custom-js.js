const slider = document.querySelector('.card-items');
let isDown = false;
let startX;
let scrollLeft;

// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 3; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//   console.log(walk);
// });


// var w_width = $(window).width();
// var position_obj = [];

// var half_w_width = w_width / 2;
// $(".card-item").each(function () {
// 	position_obj.push($(this).offset().left);
// });

// Draggable.create(".card-items", {
// 	type: "scrollLeft",
// 	edgeResistance: 0.9,
// 	throwProps: !0,
// 	maxDuration: 1.2,
// 	minDuration: 1.2,
// 	lockAxis: true,
// 	throwProps: true,
// 	onThrowUpdate: function () {
// 		var wrapper_left = this.x * -1 + half_w_width;

// 		$(position_obj).each(function (i, val) {
// 			obj_c = i + 1;
// 			if (val < wrapper_left) {
// 				$(".card-item").removeClass("active");
// 				$("#item-" + obj_c).addClass("active");
// 			}
// 		});
// 	},
// 	snap: function (e) {
// 		var span_window_w = $(window).width();
// 		return -Math.round(
// 			Math.round(e / (0.3 * span_window_w)) * (0.3 * span_window_w)
// 		); // This changes the threshold for dragging and snapping the obj's
// 	},
// 	onDragStart: function () {},
// 	onThrowComplete: function () {
// 		TweenLite.set(".card-item", { className: "+=loc" });
// 	}
// }),
// 	TweenMax.set(".card-items", {
// 		overflow: "scroll"
// 	})
// 	// $(".card-items").scroll(function () {
// 	// 	$(".parallax").each(function () {
// 	// 		var leftOffset = $(this).offset().left;
// 	// 		var element_w = $(this).width();

// 	// 		leftOffset < w_width &&
// 	// 			leftOffset + element_w > 0 &&
// 	// 			TweenLite.to($(this), 1.2, {
// 	// 				xPercent:
// 	// 					((w_width - leftOffset) / w_width) * $(this).attr("data-velocity"),
// 	// 				overwrite: 0
// 	// 			});
// 	// 	});
// 	// });

//$( document ).ready(function() {
  // const toggleForm = () => {
  //   const container = document.querySelector(".container");
  //   container.classList.toggle("active");
  // };

//})

