// divs
var mha = document.getElementById('mha')
var days = document.getElementById('days')
var ao = document.getElementById('ao')
var bsr = document.getElementById('bsr')
var hai = document.getElementById('hai')
var m2 = document.getElementById('m2')
var content = document.getElementsByClassName('content')
var holder = document.getElementsByClassName('holder')
// logos
var mhal = document.getElementById('mha-logo')
var daysl = document.getElementById('days-logo')
var aol = document.getElementById('ao-logo')
var bsrl = document.getElementById('bsr-logo')
var hail = document.getElementById('hai-logo')
var m2l = document.getElementById('m2-logo')
// Second Logo
var mhal2 = document.getElementById('mha-logo2')
var daysl2 = document.getElementById('days-logo2')
var aol2 = document.getElementById('ao-logo2')
var bsrl2 = document.getElementById('bsr-logo2')
var hail2 = document.getElementById('hai-logo2')
var m2l2 = document.getElementById('m2-logo2')

var sideImg = document.getElementsByClassName('sideImg')
// Div Array
var anime = [mha, days, ao, bsr, hai, m2]
var logos = [mhal, daysl, aol, bsrl, hail, m2l]
var animeNumber
var opening = document.getElementsByClassName('video')
var intViewportHeight = window.innerHeight
var intViewportWidth = window.innerWidth
var smallContent = document.getElementsByClassName('content-small')
function bokuNo () {
  animeNumber = 0
  expando()
}

function soccer () {
  animeNumber = 1
  expando()
}

function rugby () {
  animeNumber = 2
  expando()
}

function haru () {
  animeNumber = 3
  expando()
}

function haikyu () {
  animeNumber = 4
  expando()
}

function major () {
  animeNumber = 5
  expando()
}

var ranCaNor = ['images/mha/caNor/aoyama.png', 'images/mha/caNor/bakugo.png',
  'images/mha/caNor/deku.png', 'images/mha/caNor/denki.png', 'images/mha/caNor/jiro.png',
  'images/mha/caNor/kirishima.png', 'images/mha/caNor/koji.png', 'images/mha/caNor/mashirao.png',
  'images/mha/caNor/mina.png', 'images/mha/caNor/mineta.png', 'images/mha/caNor/momo.png',
  'images/mha/caNor/sato.png', 'images/mha/caNor/sero.png', 'images/mha/caNor/shoji.png',
  'images/mha/caNor/tenya.png', 'images/mha/caNor/todoroki.png', 'images/mha/caNor/tokoyami.png',
  'images/mha/caNor/toru.png', 'images/mha/caNor/tsuyu.png', 'images/mha/caNor/uraraka.png']

var ranCaHero = ['images/mha/caHero/aoyama.png', 'images/mha/caHero/bakugo.png',
  'images/mha/caHero/deku.png', 'images/mha/caHero/denki.png', 'images/mha/caHero/jiro.png',
  'images/mha/caHero/kirishima.png', 'images/mha/caHero/koji.png', 'images/mha/caHero/mashirao.png',
  'images/mha/caHero/mina.png', 'images/mha/caHero/mineta.png', 'images/mha/caHero/momo.png',
  'images/mha/caHero/sato.png', 'images/mha/caHero/sero.png', 'images/mha/caHero/shoji.png',
  'images/mha/caHero/tenya.png', 'images/mha/caHero/todoroki.png', 'images/mha/caHero/tokoyami.png',
  'images/mha/caHero/toru.png', 'images/mha/caHero/tsuyu.png', 'images/mha/caHero/uraraka.png']

var ranDays = ['images/days/haibara.png', 'images/days/kazama.png', 'images/days/kimishita.png',
  'images/days/mizuki.png', 'images/days/tsuku.png', 'images/days/kurusu.png',
  'images/days/nitobe.png', 'images/days/ooshiba.png', 'images/days/usui.png']
var heroes
var daysPlayers
function expando () {
  var i
  if (animeNumber === 0) { // My Hero Academia
    if (intViewportHeight >= 375 && intViewportHeight <= 414 && intViewportWidth >= 667 && intViewportWidth <= 896) {
      if (animeNumber === 0) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[0].style.display = 'none'
      } else {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    mha.addEventListener('mouseover', stopHover)
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px black'
      anime[i].style.opacity = '.5'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[0].style.opacity = '1'
      anime[0].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight >= 375 && intViewportHeight <= 414 && intViewportWidth >= 667 && intViewportWidth <= 896) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    mha.style.background = 'rgba(255, 251, 176, .5)'
    mha.style.transition = 'ease 1s'
    mha.style.height = '70vh'
    mhal.style.display = 'none'
    setTimeout(function () {
      content[0].style.display = 'block'
      holder[0].style.display = 'block'
      if (!opening[1].isPlaying || !opening[2].isPlaying || !opening[3].isPlaying || !opening[4].isPlaying) {
        opening[1].pause()
        opening[2].pause()
        opening[3].pause()
        opening[4].pause()
        opening[5].pause()
        opening[0].play()
      } else {
        opening[0].play()
      }
    }, 1000)
    mha.style.boxShadow = '5px 10px black'
    mhal2.addEventListener('click', popup)
    reset()
    heroes = setInterval(function () {
      var r = Math.floor(Math.random() * (19))
      sideImg[0].src = ranCaNor[r]
      sideImg[1].src = ranCaHero[r]
    }, 1000)
  } else if (animeNumber === 1) { // Days
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      if (animeNumber === 1) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[1].style.display = 'none'
      } else {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px black'
      anime[i].style.opacity = '.5'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[1].style.opacity = '1'
      anime[1].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    days.style.background = 'rgba(0, 0, 0, .5)'
    days.style.transition = 'ease 1s'
    days.style.height = '70vh'
    daysl.style.display = 'none'
    setTimeout(function () {
      content[1].style.display = 'block'
      holder[1].style.display = 'block'
      if (!opening[0].isPlaying || !opening[2].isPlaying || !opening[3].isPlaying || !opening[4].isPlaying) {
        opening[0].pause()
        opening[2].pause()
        opening[3].pause()
        opening[4].pause()
        opening[5].pause()
        opening[1].play()
      } else {
        opening[1].play()
      }
    }, 1000)
    days.style.boxShadow = '5px 10px black'
    daysl2.addEventListener('click', popup)
    reset()
    daysPlayers = setInterval(function () {
      var r = Math.floor(Math.random() * (8))
      var m = Math.floor(Math.random() * (8))
      sideImg[0].src = ranDays[r]
      sideImg[1].src = ranDays[m]
    }, 1000)
  } else if (animeNumber === 2) { // All Out
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      if (animeNumber === 2) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[2].style.display = 'none'
      } else {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px black'
      anime[i].style.opacity = '.5'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[2].style.opacity = '1'
      anime[2].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    ao.style.background = 'rgba(255, 98, 86, .5)'
    ao.style.transition = 'ease 1s'
    ao.style.height = '70vh'
    aol.style.display = 'none'
    setTimeout(function () {
      content[2].style.display = 'block'
      holder[2].style.display = 'block'
      if (!opening[0].isPlaying || !opening[1].isPlaying || !opening[3].isPlaying || !opening[4].isPlaying) {
        opening[0].pause()
        opening[1].pause()
        opening[3].pause()
        opening[4].pause()
        opening[5].pause()
        opening[2].play()
      } else {
        opening[2].play()
      }
    }, 1000)
    ao.style.boxShadow = '5px 10px black'
    aol2.addEventListener('click', popup)
  } else if (animeNumber === 3) { // Blue Spring Ride
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      if (animeNumber === 3) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[3].style.display = 'none'
      } else {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px black'
      anime[i].style.opacity = '.5'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[3].style.opacity = '1'
      anime[3].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    bsr.style.background = 'rgba(108, 140, 255, .5)'
    bsr.style.transition = 'ease 1s'
    bsr.style.height = '70vh'
    bsrl.style.display = 'none'
    setTimeout(function () {
      content[3].style.display = 'block'
      holder[3].style.display = 'block'
      if (!opening[0].isPlaying || !opening[1].isPlaying || !opening[2].isPlaying || !opening[4].isPlaying || !opening[5].isPlaying) {
        opening[0].pause()
        opening[1].pause()
        opening[2].pause()
        opening[4].pause()
        opening[5].pause()
        opening[3].play()
      } else {
        opening[3].play()
      }
    }, 1000)
    bsr.style.boxShadow = '5px 10px black'
    bsrl2.addEventListener('click', popup)
  } else if (animeNumber === 4) { // Haikyu!!
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      if (animeNumber === 4) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[4].style.display = 'none'
      } else {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px black'
      anime[i].style.opacity = '.5'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[4].style.opacity = '1'
      anime[4].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    hai.style.background = 'rgba(255, 142, 60, .5)'
    hai.style.transition = 'ease 1s'
    hai.style.height = '70vh'
    hail.style.display = 'none'
    setTimeout(function () {
      content[4].style.display = 'block'
      holder[4].style.display = 'block'
      if (!opening[0].isPlaying || !opening[1].isPlaying || !opening[2].isPlaying || !opening[3].isPlaying || !opening[5].isPlaying) {
        opening[0].pause()
        opening[1].pause()
        opening[2].pause()
        opening[3].pause()
        opening[5].pause()
        opening[4].play()
      } else {
        opening[4].play()
      }
    }, 1000)
    hai.style.boxShadow = '5px 10px black'
    hail2.addEventListener('click', popup)
  } else if (animeNumber === 5) { // MAJOR 2nd
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      if (animeNumber === 5) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[5].style.display = 'none'
      } else {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px black'
      anime[i].style.opacity = '.5'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[5].style.opacity = '1'
      anime[5].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 414 && intViewportWidth <= 896) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    m2.style.transition = 'ease 1s'
    m2.style.height = '70vh'
    m2l.style.display = 'none'
    setTimeout(function () {
      content[5].style.display = 'block'
      holder[5].style.display = 'block'
      if (!opening[0].isPlaying || !opening[1].isPlaying || !opening[2].isPlaying || !opening[3].isPlaying || !opening[4].isPlaying) {
        opening[0].pause()
        opening[1].pause()
        opening[2].pause()
        opening[3].pause()
        opening[4].pause()
        opening[5].play()
      } else {
        opening[5].play()
      }
    }, 1000)
    m2.style.background = 'rgba(79, 89, 255, .5)'
    m2.style.boxShadow = '5px 10px black'
    m2l2.addEventListener('click', popup)
  }

  function stopHover () {
    mha.style.transform = 'scale(1)'
    mhal2.style.cursor = 'pointer'
  }
}
function popup () {
  if (animeNumber === 0) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    open('mha.html', 'test', params)
  }
}

function reset () {
  clearInterval(heroes)
  clearInterval(daysPlayers)
}

window.onload = function () {
  var i
  if (intViewportHeight <= 414) {
    for (i = 0; i < anime.length; i++) {
      anime[i].style.filter = 'grayscale(0)'
    }
    if (animeNumber === 0) {
    }
  }
}
