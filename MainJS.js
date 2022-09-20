window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // document.getElementById("navbar").style.visibility='visible';
    document.getElementById("navbar").style.top = "0";
  } else {
    // document.getElementById("navbar").style.visibility="hidden" ;
    document.getElementById("navbar").style.top = "-50cm";
  }
}

window.addEventListener("load", reveal);
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealS);
function revealS() {
  var reveals = document.querySelectorAll(".revealS");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}


window.addEventListener("scroll", reveal2);
function reveal2() {
  var reveals = document.querySelectorAll(".r2");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal3);
function reveal3() {
  var reveals = document.querySelectorAll(".r3");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("load", reveal3l);
function reveal3l() {
  var reveals = document.querySelectorAll(".r3l");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("load", reveal2l);
function reveal2l() {
  var reveals = document.querySelectorAll(".r2l");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

//popup
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var submit = document.getElementById("b17");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
  var t = document.getElementById("modC");
  if (t.contains("modal_content_cl")) {
    t.classList.replace("modal_content_cl", "modal_content_op");
  } else {
    t.classList.add("modal_content_op");
  }
}
span.onclick = function () {
  modal.style.display = "none";
  var t = document.getElementById("modC");
  if (t.contains("modal_content_op")) {
    t.classList.replace("modal_content_op", "modal_content_cl");
  }
}
window.onclick = function (event) {
  console.log(event);
  console.log(event.target);
  if (event.target == modal) {
    modal.style.display = "none";
    // var t=document.getElementById("modC");
    // t.classList.replace("modal-content-cl","modal-content-op");
  }
}

//submit stuff
submit.addEventListener("click", function () {
  let allAreFilled = true;
  let a = document.getElementById("formm").querySelectorAll("[required]")
  Array.from(a).forEach(function (i) {
    // console.log("i:: ", i.value)
    if (i.value === '') {
      allAreFilled = false;
      return
    }
  })
  if (allAreFilled) {
    window.alert("Submited Successfully!! We will contact you!!")
  }
  else if (!allAreFilled) {
    Array.from(a).forEach(function (i){
      i.style.border= "3px solid red";
    })
    window.alert('Fill all the required fields');
  }
})
