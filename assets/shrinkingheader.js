window.onscroll = function() {shrinkheader()};

function shrinkheader() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.fontSize = "10px";
        document.getElementById("heading").style.transform = "translateX(40%)"

    } else {
        document.getElementById("header").style.fontSize = "20px";
        document.getElementById("heading").style.transform = "translateX(0)"
    }
    }