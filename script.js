// divs
var mha = document.getElementById('mha')
var days = document.getElementById('days')
var ao = document.getElementById('ao')
var bsr = document.getElementById('bsr')
var hai = document.getElementById('hai')
var ff = document.getElementById('ff')
var content = document.getElementsByClassName('content')
var holder = document.getElementsByClassName('holder')
// logos
var mhal = document.getElementById('mha-logo')
var daysl = document.getElementById('days-logo')
var aol = document.getElementById('ao-logo')
var bsrl = document.getElementById('bsr-logo')
var hail = document.getElementById('hai-logo')
var ffl = document.getElementById('ff-logo')
// Second Logo
var mhal2 = document.getElementById('mha-logo2')
var daysl2 = document.getElementById('days-logo2')
var aol2 = document.getElementById('ao-logo2')
var bsrl2 = document.getElementById('bsr-logo2')
var hail2 = document.getElementById('hai-logo2')
var ffl2 = document.getElementById('ff-logo2')

var sideImg = document.getElementsByClassName('sideImg')
// Div Array
var anime = [mha, days, bsr, hai, ff]
var logos = [mhal, daysl, bsrl, hail, ffl]
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

/*function rugby () {
  animeNumber = 2
  expando()
}*/

function haru () {
  animeNumber = 3
  expando()
}

function haikyu () {
  animeNumber = 4
  expando()
}

function fire () {
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
var heroes
var daysPlayers
var rugbyPlayers
var Haru
var haiPlayers
var ff8
function expando () {
  var i
  if (animeNumber === 0) { // My Hero Academia
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      if (animeNumber === 0) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[0].style.display = 'none'
      } else if (intViewportHeight >= 500) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    mha.addEventListener('mouseover', stopHover)
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px rgba(70, 41, 71, .5)'
      anime[i].style.opacity = '.5'
      anime[i].style.background = 'white'
      anime[i].style.filter = 'grayscale(90%)'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[0].style.opacity = '1'
      anime[0].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    document.body.style.cursor = 'url(images/cursors/mha.cur), auto'
    mha.style.background = 'rgb(255, 251, 176)'
    document.body.style.transition = 'ease 1s'
    document.body.style.background = '#2A7E5C'
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
        //opening[5].pause()
        opening[0].play()
      } else {
        opening[0].play()
      }
    }, 400)
    mha.style.boxShadow = '5px 10px rgba(70, 41, 71, .5)'
    mhal2.addEventListener('click', popup)
    reset()
    heroes = setInterval(function () {
      var r = Math.floor(Math.random() * (19))
      sideImg[0].src = ranCaNor[r]
      sideImg[1].src = ranCaHero[r]
    }, 1000)
  } else if (animeNumber === 1) { // Days
    document.body.style.background = '#0E0D0E'
    document.body.style.transition = 'ease 1s'
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      if (animeNumber === 1) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[1].style.display = 'none'
      } else if (intViewportHeight >= 500) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    days.addEventListener('mouseover', stopHover)
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px rgba(70, 41, 71, .5)'
      anime[i].style.opacity = '.5'
      anime[i].style.filter = 'grayscale(90%)'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[1].style.opacity = '1'
      anime[1].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    document.body.style.cursor = 'url(images/cursors/days.cur), auto'
    days.style.background = 'rgb(40, 40, 40)'
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
        //opening[5].pause()
        opening[1].play()
      } else {
        opening[1].play()
      }
    }, 1000)
    days.style.boxShadow = '5px 10px rgba(200, 201, 200, .5)'
    daysl2.addEventListener('click', popup)
    reset()
    daysPlayers = setInterval(function () {
      var r = Math.floor(Math.random() * (13))
      var m = Math.floor(Math.random() * (13))
      sideImg[0].src = ranDays[r]
      sideImg[1].src = ranDays[m]
    }, 1000)
  } else if (animeNumber === 2) { // All Out
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      if (animeNumber === 2) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[2].style.display = 'none'
      } else if (intViewportHeight >= 500) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
  /*  ao.addEventListener('mouseover', stopHover)
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px rgba(70, 41, 71, .5)'
      anime[i].style.opacity = '.5'
      anime[i].style.filter = 'grayscale(90%)'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[2].style.opacity = '1'
      anime[2].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    document.body.style.cursor = 'url(images/cursors/ao.cur), auto'
    document.body.style.background = '#283154'
    document.body.style.transition = 'ease 1s'
    ao.style.background = '#B04531'
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
    ao.style.boxShadow = '5px 10px rgba(233, 234, 236, .9)'
    aol2.addEventListener('click', popup)
    reset()
    rugbyPlayers = setInterval(function () {
      var r = Math.floor(Math.random() * (24))
      var m = Math.floor(Math.random() * (24))
      sideImg[0].src = ranAO[r]
      sideImg[1].src = ranAO[m]
    }, 1000)*/
  } else if (animeNumber === 3) { // Blue Spring Ride
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      if (animeNumber === 3) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[2].style.display = 'none'
      } else if (intViewportHeight >= 500) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    bsr.addEventListener('mouseover', stopHover)
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px rgba(70, 41, 71, .5)'
      anime[i].style.opacity = '.5'
      anime[i].style.filter = 'grayscale(90%)'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[2].style.opacity = '1'
      anime[2].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    document.body.style.cursor = 'url(images/cursors/bsr.cur), auto'
    document.body.style.background = '#C1D9CB'
    document.body.style.transition = 'ease 1s'
    bsr.style.background = 'rgba(108, 140, 255, .5)'
    bsr.style.transition = 'ease 1s'
    bsr.style.height = '70vh'
    bsrl.style.display = 'none'
    setTimeout(function () {
      content[2].style.display = 'block'
      holder[2].style.display = 'block'
      if (!opening[0].isPlaying || !opening[1].isPlaying || !opening[2].isPlaying || !opening[4].isPlaying || !opening[5].isPlaying) {
        opening[0].pause()
        opening[1].pause()
        //opening[2].pause()
        opening[4].pause()
        //opening[5].pause()
        opening[2].play()
      } else {
        opening[2].play()
      }
    }, 1000)
    reset()
    Haru = setInterval(function () {
      var r = Math.floor(Math.random() * (5))
      var m = Math.floor(Math.random() * (5))
      sideImg[0].src = ranBSR[r]
      sideImg[1].src = ranBSR[m]
    }, 1000)
    bsr.style.boxShadow = '5px 10px rgba(70, 41, 71, .5)'
    bsrl2.addEventListener('click', popup)
  } else if (animeNumber === 4) { // Haikyu!!
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      if (animeNumber === 4) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[3].style.display = 'none'
      } else if (intViewportHeight >= 500) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    hai.addEventListener('mouseover', stopHover)
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px rgba(70, 41, 71, .5)'
      anime[i].style.opacity = '.5'
      anime[i].style.filter = 'grayscale(90%)'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[3].style.opacity = '1'
      anime[3].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    document.body.style.cursor = 'url(images/cursors/hai.cur), auto'
    document.body.style.background = '#323345'
    document.body.style.transition = 'ease 1s'
    hai.style.background = 'rgb(255, 142, 60)'
    hai.style.transition = 'ease 1s'
    hai.style.height = '70vh'
    hail.style.display = 'none'
    setTimeout(function () {
      content[3].style.display = 'block'
      holder[3].style.display = 'block'
      if (!opening[0].isPlaying || !opening[1].isPlaying || !opening[2].isPlaying || !opening[3].isPlaying || !opening[5].isPlaying) {
        opening[0].pause()
        opening[1].pause()
        opening[2].pause()
      //  opening[3].pause()
      //  opening[5].pause()
        opening[3].play()
      } else {
        opening[3].play()
      }
    }, 1000)
    reset()
    haiPlayers = setInterval(function () {
      var r = Math.floor(Math.random() * (11))
      var m = Math.floor(Math.random() * (11))
      sideImg[0].src = ranHai[r]
      sideImg[1].src = ranHai[m]
    }, 1000)
    hai.style.boxShadow = '5px 10px rgba(226, 78, 31, .8)'
    hail2.addEventListener('click', popup)
  } else if (animeNumber === 5) { // Fire Force
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      if (animeNumber === 5) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'flex'
        }
        smallContent[4].style.display = 'none'
      } else if (intViewportHeight >= 500) {
        for (i = 0; i < smallContent.length; i++) {
          smallContent[i].style.display = 'none'
        }
      }
    }
    ff.addEventListener('mouseover', stopHover)
    for (i = 0; i < anime.length; i++) {
      anime[i].style.opacity = '.5'
      anime[i].style.height = 'calc(100%/6)'
      anime[i].style.boxShadow = '5px 10px rgba(70, 41, 71, .5)'
      anime[i].style.opacity = '.5'
      anime[i].style.filter = 'grayscale(90%)'
      anime[i].style.background = 'white'
      content[i].style.display = 'none'
      holder[i].style.display = 'none'
      logos[i].style.display = 'flex'
      anime[4].style.opacity = '1'
      anime[4].style.filter = 'grayscale(0%)'
    }
    if (intViewportHeight <= 500 && intViewportWidth <= 2000) {
      for (i = 0; i < smallContent.length; i++) {
        anime[i].style.height = '25%'
      }
    }
    document.body.style.cursor = 'url(images/cursors/ff.png), auto'
    document.body.style.background = '#2F2F2F'
    document.body.style.transition = 'ease 1s'
    ff.style.transition = 'ease 1s'
    ff.style.height = '70vh'
    ffl.style.display = 'none'
    setTimeout(function () {
      content[4].style.display = 'block'
      holder[4].style.display = 'block'
      if (!opening[0].isPlaying || !opening[1].isPlaying || !opening[2].isPlaying || !opening[3].isPlaying || !opening[4].isPlaying) {
        opening[0].pause()
        opening[1].pause()
        opening[2].pause()
        opening[3].pause()
        //opening[4].pause()
        //opening[5].play()
      } else {
        opening[4].play()
      }
    }, 1000)
    reset()
    ff8 = setInterval(function () {
      var r = Math.floor(Math.random() * (5))
      var m = Math.floor(Math.random() * (5))
      sideImg[0].src = ranFf[r]
      sideImg[1].src = ranFf[m]
    }, 1000)
    ff.style.background = 'rgb(132, 208, 217)'
    ff.style.boxShadow = '5px 10px rgb(226, 201, 45)'
    ffl2.addEventListener('click', popup)
  }

  function stopHover () {
    mha.style.transform = 'scale(1)'
    mhal2.style.cursor = 'pointer'
    days.style.transform = 'scale(1)'
    daysl2.style.cursor = 'pointer'
  /*  ao.style.transform = 'scale(1)'
    aol2.style.cursor = 'pointer'*/
    bsr.style.transform = 'scale(1)'
    bsrl2.style.cursor = 'pointer'
    hai.style.transform = 'scale(1)'
    hail2.style.cursor = 'pointer'
    ff.style.transform = 'scale(1)'
    ffl2.style.cursor = 'pointer'
  }
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
  /*if (animeNumber === 2) {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`
    open('ao.html', 'test', params)
  }*/
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
  //clearInterval(rugbyPlayers)
  clearInterval(Haru)
  clearInterval(haiPlayers)
  clearInterval(ff8)
}
