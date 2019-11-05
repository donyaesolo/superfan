var hero = document.getElementsByClassName('slide')
var uniform = document.getElementsByClassName('character')
var gap = document.getElementsByClassName('gap')
var classNumber
var i
window.onload = function () {
  for (i = 0; i < gap.length; i++) {
    console.log("oin")
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
function class7 () {
  classNumber = 7
  slide()
}
function class8 () {
  classNumber = 8
  slide()
}
function class9 () {
  classNumber = 9
  slide()
}
function class10 () {
  classNumber = 10
  slide()
}
function class11 () {
  classNumber = 11
  slide()
}
function class12 () {
  classNumber = 12
  slide()
}
function class13 () {
  classNumber = 13
  slide()
}
function class14 () {
  classNumber = 14
  slide()
}
function class15 () {
  classNumber = 15
  slide()
}
function class16 () {
  classNumber = 16
  slide()
}
function class17 () {
  classNumber = 17
  slide()
}
function class18 () {
  classNumber = 18
  slide()
}
function class19 () {
  classNumber = 19
  slide()
}
function class20 () {
  classNumber = 20
  slide()
}
function slide () {
  if (classNumber === 1) { // Aoyama
    hero[0].style.display = 'block'
    setTimeout(function timeout () {
      hero[0].style.transition = 'transform 2s ease'
      hero[0].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 2) { // Mina
    hero[1].style.display = 'block'
    hero[1].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[1].style.transition = 'transform 2s ease'
      hero[1].style.transform = 'translate(500px, 0)'
    }, 100)
  } else if (classNumber === 3) { // Tsuyu
    hero[2].style.display = 'block'
    hero[2].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[2].style.transition = 'transform 2s ease'
      hero[2].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 4) { // Tenya
    hero[3].style.display = 'block'
    hero[3].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[3].style.transition = 'transform 2s ease'
      hero[3].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 5) { // Uraraka
    hero[4].style.display = 'block'
    hero[4].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[4].style.transition = 'transform 2s ease'
      hero[4].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 6) { // Mashirao
    hero[5].style.display = 'block'
    hero[5].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[5].style.transition = 'transform 2s ease'
      hero[5].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 7) { // Denki
    hero[6].style.display = 'block'
    hero[6].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[6].style.transition = 'transform 2s ease'
      hero[6].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 8) { // Kirishima
    hero[7].style.display = 'block'
    hero[7].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[7].style.transition = 'transform 2s ease'
      hero[7].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 9) { // Koji
    hero[8].style.display = 'block'
    hero[8].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[8].style.transition = 'transform 2s ease'
      hero[8].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 10) { // Seto
    hero[9].style.display = 'block'
    hero[9].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[9].style.transition = 'transform 2s ease'
      hero[9].style.transform = 'translate(400px, 0)'
    }, 100)
  } else if (classNumber === 11) { // Shojij
    hero[10].style.display = 'block'
    hero[10].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[10].style.transition = 'transform 2s ease'
      hero[10].style.transform = 'translate(350px, 0)'
    }, 100)
  } else if (classNumber === 12) { // Jiro
    hero[11].style.display = 'block'
    hero[11].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[11].style.transition = 'transform 2s ease'
      hero[11].style.transform = 'translate(500px, 0)'
    }, 100)
  } else if (classNumber === 13) { // Sero
    hero[12].style.display = 'block'
    hero[12].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[12].style.transition = 'transform 2s ease'
      hero[12].style.transform = 'translate(460px, 0)'
    }, 100)
  } else if (classNumber === 14) { // Tokoyami
    hero[13].style.display = 'block'
    hero[13].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[13].style.transition = 'transform 2s ease'
      hero[13].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 15) { // Todoroki
    hero[14].style.display = 'block'
    hero[14].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[14].style.transition = 'transform 2s ease'
      hero[14].style.transform = 'translate(400px, 0)'
    }, 100)
  } else if (classNumber === 16) { // Toru
    hero[15].style.display = 'block'
    hero[15].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[15].style.transition = 'transform 2s ease'
      hero[15].style.transform = 'translate(600px, 0)'
    }, 100)
  } else if (classNumber === 17) { // Bakugo
    hero[16].style.display = 'block'
    hero[16].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[16].style.transition = 'transform 2s ease'
      hero[16].style.transform = 'translate(400px, 0)'
    }, 100)
  } else if (classNumber === 18) { // Deku
    hero[17].style.display = 'block'
    hero[17].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[17].style.transition = 'transform 2s ease'
      hero[17].style.transform = 'translate(500px, 0)'
    }, 100)
  } else if (classNumber === 19) { // Mineta
    hero[18].style.display = 'block'
    hero[18].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[18].style.transition = 'transform 2s ease'
      hero[18].style.transform = 'translate(450px, 0)'
    }, 100)
  } else if (classNumber === 20) { // Momo
    hero[19].style.display = 'block'
    hero[19].style.marginLeft = '-700px'
    setTimeout(function timeout () {
      hero[19].style.transition = 'transform 2s ease'
      hero[19].style.transform = 'translate(560px, 0)'
    }, 100)
  }
}
function slideBack () {
  for (i = 0; i < hero.length; i++) {
    console.log("bk")
    hero[i].style.transition = 'transform 2s ease'
    hero[i].style.transform = 'translate(-600px, 0)'
  }
}
