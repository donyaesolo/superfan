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

function slide () {
  if (classNumber === 1) { // Futaba
    hero[0].style.display = 'block'
    setTimeout(function timeout () {
      hero[0].style.transition = 'transform 2s ease'
      hero[0].style.transform = 'translate(800px, 0)'
    }, 100)
  } else if (classNumber === 2) { // Kou
    hero[1].style.display = 'block'
    setTimeout(function timeout () {
      hero[1].style.transition = 'transform 2s ease'
      hero[1].style.transform = 'translate(800px, 0)'
    }, 100)
  } else if (classNumber === 3) { // Yuri
    hero[2].style.display = 'block'
    setTimeout(function timeout () {
      hero[2].style.transition = 'transform 2s ease'
      hero[2].style.transform = 'translate(800px, 0)'
    }, 100)
  } else if (classNumber === 4) { // Shuko
    hero[3].style.display = 'block'
    setTimeout(function timeout () {
      hero[3].style.transition = 'transform 2s ease'
      hero[3].style.transform = 'translate(800px, 0)'
    }, 100)
  } else if (classNumber === 5) { // Aya
    hero[4].style.display = 'block'
    setTimeout(function timeout () {
      hero[4].style.transition = 'transform 2s ease'
      hero[4].style.transform = 'translate(800px, 0)'
    }, 100)
  }
}
function slideBack () {
  for (i = 0; i < hero.length; i++) {
    hero[i].style.transition = 'transform 2s ease'
    hero[i].style.transform = 'translate(-600px, 0)'
  }
}
