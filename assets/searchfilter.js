function searchf() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL")
    li=ul.getElementsByTagName("li");
    for (i=0; i <li.length;i++) {
        a=li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ""
        ul.style.height = "max-content";
        } else {
        li[i].style.display = "none"
        ul.style.height = "max-content";
        }
      }
}

function search2() {
    var input, filter, table, td, tr, i, txtValue;
    input = document.getElementById("tablefunct");
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable")
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }