
function iconChange() {
    var change = document.getElementById("icon-container");
    var changeChecker = change.classList.contains("change");
    
    if(changeChecker === false) {
        change.classList.add("change");
    } else {
        change.classList.remove("change"); }
}
