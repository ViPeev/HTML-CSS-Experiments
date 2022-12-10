   var column = document.getElementsByClassName("column");
   var i;

   function onerow() {
       for (i = 0; i < column.length; i++) {
           column[i].style.flex = "100%";
       }
    }
   function tworow() {
       for (i = 0; i < column.length; i++) {
           column[i].style.flex = "50%";
       }
    }
   function fourrow() {
       for (i = 0; i< column.length; i++) {
           column[i].style.flex = "25%";
       }
   }