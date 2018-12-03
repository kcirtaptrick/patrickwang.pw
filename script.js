
function filter() {
  var input = document.getElementById("widget-searchbar").value.toUpperCase().split(" ");
  var widgets = document.getElementById("coin-widgets").getElementsByClassName("coinmarketcap-currency-widget");
  for(var i = 0; i < widgets.length; i++){
    var found = false;
    for(var j = 0; j < input.length; j++){
      if ((widgets[i].dataset.currency.toUpperCase().indexOf(input[j]) != -1 || widgets[i].getAttribute("short").toUpperCase().indexOf(input[j]) != -1) && input[j] != "") found = true;
    }
    (found || input[0] == "") ? widgets[i].style.display = "" : widgets[i].style.display = "none";
  }
}
//config vars
const lagAmount = 50;
const maxSpeed = 100;
const frameRate = 20;
const selector = '.links';
//code
let scrollTop = 0;
let pinTop = 0;
let lastTime;
const updatePinPosition = (time) => {
	if (!lastTime)
		lastTime = time;
	let delta = time - lastTime;
	if (delta >= frameRate){
		scrollTop = $(window).scrollTop();
		var move = (scrollTop - pinTop) * delta / (lagAmount + delta);
		var direction = move === 0 ? 0 : move / Math.abs(move);
		pinTop = pinTop + Math.min( Math.abs(move), maxSpeed ) * direction;
		$(selector).css('transform', `translateY(${-move}px`)
		lastTime = time;
	}
	requestAnimationFrame(updatePinPosition);
}
requestAnimationFrame(updatePinPosition);