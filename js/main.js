const $button = document.querySelector("#sidebar-toggle");
const $wrapper = document.querySelector("#wrapper");
const $sidebar = document.querySelector("#container-sidebar");

let pdf1 = document.getElementById("pdf1");
let pdf2 = document.getElementById("pdf2");
let pdf3 = document.getElementById("pdf3");
let pdf4 = document.getElementById("pdf4");
let pdf5 = document.getElementById("pdf5");
let pdf6 = document.getElementById("pdf6");
let pdf7 = document.getElementById("pdf7");
let pdf8 = document.getElementById("pdf8");
let pdf9 = document.getElementById("pdf9");
let pdf10 = document.getElementById("pdf10");
let pdf11 = document.getElementById("pdf11");
let pdf12 = document.getElementById("pdf12");
let pdf13 = document.getElementById("pdf13");
let pdf14 = document.getElementById("pdf14");
let pdf15 = document.getElementById("pdf15");
let pdf16 = document.getElementById("pdf16");

$button.addEventListener("click", (e) => {
  e.preventDefault();
  $wrapper.classList.toggle("toggled");

  if ($wrapper.classList.contains("toggled")) {
    $sidebar.style.width = "50px";
    $sidebar.style.transition = "all 0.5s ease";
  } else {
    $sidebar.style.width = "250px";
  }
});

$(".status_change .dropdown-item").click(function () {
  var getStatusText = $(this).text();
  $(this).closest(".status_dropdown").find(".status__btn").text(getStatusText);
  var generateStatusClass = `${$(this).attr("data-class")}-status`;
  $(this)
    .closest(".status_dropdown")
    .attr("data-color", `${generateStatusClass}`);
});

var theToggle = document.getElementById("toggle");

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
  return new RegExp(" " + className + " ").test(" " + elem.className + " ");
}
// addClass
function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += " " + className;
  }
}
// removeClass
function removeClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  }
}
// toggleClass
function toggleClass(elem, className) {
  var newClass = " " + elem.className.replace(/[\t\r\n]/g, " ") + " ";
  if (hasClass(elem, className)) {
    while (newClass.indexOf(" " + className + " ") >= 0) {
      newClass = newClass.replace(" " + className + " ", " ");
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, "");
  } else {
    elem.className += " " + className;
  }
}

theToggle.onclick = function () {
  toggleClass(this, "on");
  return false;
};

function changePdf1() {
  pdf1.style.display = "block";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf2() {
  pdf1.style.display = "none";
  pdf2.style.display = "block";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf3() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "block";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf4() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "block";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf5() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "block";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf6() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "block";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf7() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "block";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf8() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "block";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf9() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "block";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf10() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "block";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf11() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "block";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf12() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "block";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf13() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "block";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf14() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "block";
  pdf15.style.display = "none";
  pdf16.style.display = "none";
}

function changePdf15() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "block";
  pdf16.style.display = "none";
}

function changePdf16() {
  pdf1.style.display = "none";
  pdf2.style.display = "none";
  pdf3.style.display = "none";
  pdf4.style.display = "none";
  pdf5.style.display = "none";
  pdf6.style.display = "none";
  pdf7.style.display = "none";
  pdf8.style.display = "none";
  pdf9.style.display = "none";
  pdf10.style.display = "none";
  pdf11.style.display = "none";
  pdf12.style.display = "none";
  pdf13.style.display = "none";
  pdf14.style.display = "none";
  pdf15.style.display = "none";
  pdf16.style.display = "block";
}
