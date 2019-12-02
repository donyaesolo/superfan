// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction()
}

// Get the navbar
var navbar = document.getElementById('navbar')
var footer = document.getElementById('footer')

// Get the offset position of the navbar
var sticky = navbar.offsetTop

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
    navbar.style.borderBottom = '2px solid #A68F93'
    footer.style.transition = 'ease 1s'
    footer.style.top = '90%'
    sideImg[0].style.transition = 'ease 1s'
    sideImg[0].style.opacity = '.5'
    sideImg[1].style.transition = 'ease 1s'
    sideImg[1].style.opacity = '.5'
  } else {
    navbar.classList.remove('sticky')
    navbar.style.borderBottom = '0px'
    footer.style.transition = 'ease .5s'
    footer.style.top = '100%'
    sideImg[0].style.transition = 'ease 1s'
    sideImg[0].style.opacity = '0'
    sideImg[1].style.transition = 'ease 1s'
    sideImg[1].style.opacity = '0'
  }
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
  'images/days/nitobe.png', 'images/days/ooshiba.png', 'images/days/usui.png',
  'images/days/inohara.png', 'images/days/nakijin.png', 'images/days/naoki.png',
  'images/days/ubukata.png']

var ranAO = ['images/ao/atsuta.png', 'images/ao/gion.png', 'images/ao/haokari.png',
  'images/ao/hirano.png', 'images/ao/Hirota.png', 'images/ao/hyosu.png',
  'images/ao/Iwashimizu.png', 'images/ao/kamo.png', 'images/ao/kashima.png',
  'images/ao/kasuga.png', 'images/ao/kibi.png', 'images/ao/kifune.png',
  'images/ao/kitamachi.png', 'images/ao/marodo.png', 'images/ao/michio.png',
  'images/ao/mikami.png', 'images/ao/mutsumi.png', 'images/ao/Oharnano.png',
  'images/ao/ohie.png', 'images/ao/sekizan.png', 'images/ao/shingo.png',
  'images/ao/shinshi.png', 'images/ao/suwa.png','images/ao/takebe.png']

var ranBSR = ['images/BSR/futaba.png', 'images/BSR/kou.png', 'images/BSR/shuko.png',
  'images/BSR/aya.png', 'images/BSR/yuri.png']
var ranHai = ['images/hai/Karasuno/standby/sugawara.png', 'images/hai/Karasuno/standby/asahi.png',
  'images/hai/Karasuno/standby/nishinoya.png', 'images/hai/Karasuno/standby/tanaka.png',
  'images/hai/Karasuno/standby/ennoshita.png', 'images/hai/Karasuno/standby/kinoshita.png',
  'images/hai/Karasuno/standby/narita.png', 'images/hai/Karasuno/standby/kageyama.png',
  'images/hai/Karasuno/standby/hinata.png', 'images/hai/Karasuno/standby/tsukishima.png',
  'images/hai/Karasuno/standby/daichi.png', 'images/hai/Karasuno/standby/yamaguchi.png']
var ranFf = ['images/ff/akitaru.png', 'images/ff/arthur.png', 'images/ff/iris.png',
  'images/ff/maki.png', 'images/ff/shinra.png', 'images/ff/takehisa.png']
var sideImg = document.getElementsByClassName('sideImg')
var heroes
var daysPlayers
var rugbyPlayers
var Haru
var haiPlayers
var ff8

var box = document.getElementsByClassName('angle-border')
var mha = document.getElementById('mha')
var main = document.getElementsByClassName('main-body')
var i
var about = false
// My Hero Academia
function next () {
  addAbout()
  document.body.style.cursor = 'url(images/cursors/mha.cur), auto'
  for (i = 0; i < box.length; i++) {
    box[i].style.transition = 'ease 1s'
    box[i].style.left = '-100%'
  }
  setTimeout(function () {
    box[0].style.display = 'none'
    box[2].style.display = 'none'
    box[3].style.display = 'none'
    box[4].style.display = 'none'
    box[5].style.display = 'none'
    box[6].style.display = 'none'
  }, 500)

  mha.style.left = '100%'
  mha.style.display = 'block'
  setTimeout(function () {
    mha.style.border = '5px solid #2A7E5C'
    mha.style.transition = 'ease 1s'
    mha.style.left = '0%'
  }, 100)
  reset()
  heroes = setInterval(function () {
    var r = Math.floor(Math.random() * (19))
    sideImg[0].src = ranCaNor[r]
    sideImg[1].src = ranCaHero[r]
  }, 1000)
}
// Days
function nextDays () {
  addAbout()
  document.body.style.cursor = 'url(images/cursors/days.cur), auto'
  for (i = 0; i < box.length; i++) {
    box[i].style.transition = 'ease 1s'
    box[i].style.left = '-100%'
  }
  setTimeout(function () {
    box[0].style.display = 'none'
    box[1].style.display = 'none'
    box[3].style.display = 'none'
    box[4].style.display = 'none'
    box[5].style.display = 'none'
    box[6].style.display = 'none'
  }, 500)

  box[2].style.left = '100%'
  box[2].style.display = 'block'
  setTimeout(function () {
    box[2].style.border = '5px solid rgb(40, 40, 40)'
    box[2].style.transition = 'ease 1s'
    box[2].style.left = '0%'
  }, 100)
  reset()
  daysPlayers = setInterval(function () {
    var r = Math.floor(Math.random() * (13))
    var m = Math.floor(Math.random() * (13))
    sideImg[0].src = ranDays[r]
    sideImg[1].src = ranDays[m]
  }, 1000)
}
// All Out
function nextAo () {
  addAbout()
  document.body.style.cursor = 'url(images/cursors/ao.cur), auto'
  for (i = 0; i < box.length; i++) {
    box[i].style.transition = 'ease 1s'
    box[i].style.left = '-100%'
  }
  setTimeout(function () {
    box[0].style.display = 'none'
    box[1].style.display = 'none'
    box[2].style.display = 'none'
    box[4].style.display = 'none'
    box[5].style.display = 'none'
    box[6].style.display = 'none'
  }, 500)

  box[3].style.left = '100%'
  box[3].style.display = 'block'
  setTimeout(function () {
    box[3].style.border = '5px solid #204275'
    box[3].style.transition = 'ease 1s'
    box[3].style.left = '0%'
  }, 100)
  reset()
  rugbyPlayers = setInterval(function () {
    var r = Math.floor(Math.random() * (24))
    var m = Math.floor(Math.random() * (24))
    sideImg[0].src = ranAO[r]
    sideImg[1].src = ranAO[m]
  }, 1000)
}
// Ao Haru Ride
function nextBsr () {
  addAbout()
  document.body.style.cursor = 'url(images/cursors/bsr.cur), auto'
  for (i = 0; i < box.length; i++) {
    box[i].style.transition = 'ease 1s'
    box[i].style.left = '-100%'
  }
  setTimeout(function () {
    box[0].style.display = 'none'
    box[1].style.display = 'none'
    box[2].style.display = 'none'
    box[3].style.display = 'none'
    box[5].style.display = 'none'
    box[6].style.display = 'none'
  }, 500)

  box[4].style.left = '100%'
  box[4].style.display = 'block'
  setTimeout(function () {
    box[4].style.border = '5px solid #D9B282'
    box[4].style.transition = 'ease 1s'
    box[4].style.left = '0%'
  }, 100)
  reset()
  Haru = setInterval(function () {
    var r = Math.floor(Math.random() * (5))
    var m = Math.floor(Math.random() * (5))
    sideImg[0].src = ranBSR[r]
    sideImg[1].src = ranBSR[m]
  }, 1000)
}
// Haikyu!!
function nextHai () {
  addAbout()
  document.body.style.cursor = 'url(images/cursors/hai.cur), auto'
  for (i = 0; i < box.length; i++) {
    box[i].style.transition = 'ease 1s'
    box[i].style.left = '-100%'
  }
  setTimeout(function () {
    box[0].style.display = 'none'
    box[1].style.display = 'none'
    box[2].style.display = 'none'
    box[3].style.display = 'none'
    box[4].style.display = 'none'
    box[6].style.display = 'none'
  }, 500)

  box[5].style.left = '100%'
  box[5].style.display = 'block'
  setTimeout(function () {
    box[5].style.border = '5px solid #292E48'
    box[5].style.outline = '2px solid #F2C641'
    box[5].style.transition = 'ease 1s'
    box[5].style.left = '0%'
  }, 100)
  reset()
  haiPlayers = setInterval(function () {
    var r = Math.floor(Math.random() * (11))
    var m = Math.floor(Math.random() * (11))
    sideImg[0].src = ranHai[r]
    sideImg[1].src = ranHai[m]
  }, 1000)
}
// Fire Force
function nextFf () {
  addAbout()
  document.body.style.cursor = 'url(images/cursors/ff.png), auto'
  for (i = 0; i < box.length; i++) {
    box[i].style.transition = 'ease 1s'
    box[i].style.left = '-100%'
  }
  setTimeout(function () {
    box[0].style.display = 'none'
    box[1].style.display = 'none'
    box[2].style.display = 'none'
    box[3].style.display = 'none'
    box[4].style.display = 'none'
    box[5].style.display = 'none'
  }, 500)

  box[6].style.left = '100%'
  box[6].style.display = 'block'
  setTimeout(function () {
    box[6].style.border = '5px solid #6B6A66'
    box[6].style.outline = '2px solid #F20C1F'
    box[6].style.transition = 'ease 1s'
    box[6].style.left = '0%'
  }, 100)
  reset()
  ff8 = setInterval(function () {
    var r = Math.floor(Math.random() * (5))
    var m = Math.floor(Math.random() * (5))
    sideImg[0].src = ranFf[r]
    sideImg[1].src = ranFf[m]
  }, 1000)
}
function addAbout () {
  navbar.style.listStyle = 'none'
  if (about === false) {
    var li = document.createElement('li')
    li.appendChild(document.createTextNode('About'))
    li.setAttribute('id', 'about')// added line
    navbar.appendChild(li)
    var aboutEle = document.getElementById('about')
    aboutEle.addEventListener('click', removeAbout)
    aboutEle.setAttribute('class', 'hvr-underline-from-center')
    aboutEle.style.top = '10%'
    about = true
  }
}
function removeAbout () {
  var aboutEle = document.getElementById('about')
  aboutEle.removeEventListener('click', removeAbout)
  aboutEle.remove()
  about = false
  reset()
  sideImg[0].src = 'images/trans.svg'
  sideImg[1].src = 'images/trans.svg'
  document.body.style.cursor = 'default'
  for (i = 0; i < box.length; i++) {
    box[i].style.transition = 'ease 1s'
    box[i].style.left = '-100%'
  }
  setTimeout(function () {
    box[1].style.display = 'none'
    box[2].style.display = 'none'
    box[3].style.display = 'none'
    box[4].style.display = 'none'
    box[5].style.display = 'none'
    box[6].style.display = 'none'
  }, 500)

  box[0].style.left = '100%'
  box[0].style.display = 'block'
  setTimeout(function () {
    box[0].style.border = '5px solid #F9BAD5'
    box[0].style.outline = '2px solid #FBE6B7'
    box[0].style.transition = 'ease 1s'
    box[0].style.left = '0%'
  }, 100)

}
var animeNumber
function nextPageMha () {
  animeNumber = 0
  popup()
}
function nextPageDays () {
  animeNumber = 1
  popup()
}
function nextPageAo () {
  animeNumber = 2
  popup()
}
function nextPageHaru () {
  animeNumber = 3
  popup()
}
function nextPageHai () {
  animeNumber = 4
  popup()
}
function nextPageFf() {
  animeNumber = 5
  popup()
}
function popup () {
  if (animeNumber === 0) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    open('mha.html', 'test', params)
  }
  if (animeNumber === 1) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    open('days.html', 'test', params)
  }
  if (animeNumber === 2) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    open('ao.html', 'test', params)
  }
  if (animeNumber === 3) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    open('bsr.html', 'test', params)
  }
  if (animeNumber === 4) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    open('hai.html', 'test', params)
  }
  if (animeNumber === 5) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    open('ff.html', 'test', params)
  }
}
function reset () {
  clearInterval(heroes)
  clearInterval(daysPlayers)
  clearInterval(rugbyPlayers)
  clearInterval(Haru)
  clearInterval(haiPlayers)
  clearInterval(ff8)
}
