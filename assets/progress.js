function progress() {
    document.getElementById("progress-bar").style.width = "50%";
    document.getElementById("progress-bar").style.borderRadius = "10px"
    var x = document.getElementById("progress-bar").style.width;
    document.getElementById("progress-bar").innerHTML = x ;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}