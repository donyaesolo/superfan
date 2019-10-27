var hero = document.getElementsByClassName('slide')
var uniform = document.getElementsByClassName('character')
var gap = document.getElementsByClassName('gap')

uniform[0].addEventListener('mouseover', slide)
gap[4].addEventListener('mouseout', slideBack)
function slide () {
  hero[0].style.display = 'block'
  hero[0].style.marginLeft = '-700px'
  hero[0].style.marginTop = '-457px'
  setTimeout(function timeout () {
    hero[0].style.transition = 'transform 2s ease'
    hero[0].style.transform = 'translate(600px, 0)'
  }, 100)
}
function slideBack () {
  hero[0].style.transition = 'transform 2s ease'
  hero[0].style.transform = 'translate(-600px, 0)'
}
