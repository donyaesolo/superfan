
function clickEffect (e) {
  var d = document.createElement('div')
  d.className = 'clickEffect'
  d.style.top = e.clientY + 'px'
  d.style.left = e.clientX + 'px'
  document.body.appendChild(d)
  d.addEventListener('animationend', function () { d.parentElement.removeChild(d) })
}
document.addEventListener('click', clickEffect)
var hero = document.getElementsByClassName('slide')
var gap = document.getElementsByClassName('gap')
var classNumber
var i
window.onload = function () {
  for (i = 0; i < gap.length; i++) {
    gap[i].addEventListener('mouseout', slideBack)
  }
}
function class1 () {
  classNumber = 1
  slide()
}
function class2 () {
  classNumber = 2
  slide()
}
function class3 () {
  classNumber = 3
  slide()
}
function class4 () {
  classNumber = 4
  slide()
}
function class5 () {
  classNumber = 5
  slide()
}
function class6 () {
  classNumber = 6
  slide()
}

function slide () {
  if (classNumber === 1) { // Akitaru
    hero[0].style.display = 'block'
    setTimeout(function timeout () {
      hero[0].style.transition = 'transform 2s ease'
      hero[0].style.transform = 'translate(500px, 0)'
    }, 100)
  } else if (classNumber === 2) { // Takehisa
    hero[1].style.display = 'block'
    setTimeout(function timeout () {
      hero[1].style.transition = 'transform 2s ease'
      hero[1].style.transform = 'translate(450px, 0)'
    }, 100)
  } else if (classNumber === 3) { // Maki
    hero[2].style.display = 'block'
    setTimeout(function timeout () {
      hero[2].style.transition = 'transform 2s ease'
      hero[2].style.transform = 'translate(100px, 0)'
    }, 100)
  } else if (classNumber === 4) { // Iris
    hero[3].style.display = 'block'
    setTimeout(function timeout () {
      hero[3].style.transition = 'transform 2s ease'
      hero[3].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 5) { // Shinra
    hero[4].style.display = 'block'
    setTimeout(function timeout () {
      hero[4].style.transition = 'transform 2s ease'
      hero[4].style.transform = 'translate(550px, 0)'
    }, 100)
  } else if (classNumber === 6) { // Arthur
    hero[5].style.display = 'block'
    setTimeout(function timeout () {
      hero[5].style.transition = 'transform 2s ease'
      hero[5].style.transform = 'translate(500px, 0)'
    }, 100)
  }
}
function slideBack () {
  for (i = 0; i < hero.length; i++) {
    hero[i].style.transition = 'transform 2s ease'
    hero[i].style.transform = 'translate(-600px, 0)'
  }
}
