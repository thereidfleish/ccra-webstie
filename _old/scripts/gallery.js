// CLUB PICTURES
// Gallery Interactivity for Club Pictures
$("#nextc").click(function () {
  nextSlidec();
});

$("#lastc").click(function () {
  prevSlidec();
});


const SLIDESC = $(".slidec");
const DOTSC = $(".dc");

/* See "show next slide snippet" to use */
function nextSlidec() {

  let nextNumc = SLIDESC.index($(".slidec:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNumc > SLIDESC.length) {
    nextNumc = 1;
  }
  showSlidec(nextNumc);
}

/* See "show previous slide snippet" to use */
function prevSlidec() {
  let prevNumc = SLIDESC.index($(".slidec:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNumc <= 0) {
    prevNumc = SLIDESC.length;
  }
  showSlidec(prevNumc);
}

function showSlidec(num) {
  let indexc = num - 1;
  let currentSlidec = SLIDESC.eq(indexc);
  let currentDotc = DOTSC.eq(indexc);
  console.log(currentSlidec)
  SLIDESC.addClass("accessible-hidden")
  currentSlidec.removeClass("accessible-hidden")
  DOTSC.addClass("d")
  DOTSC.removeClass("dp")
  currentDotc.removeClass("d")
  currentDotc.addClass("dp")

}
$("#dot1c").click(function () {
  showSlidec(1);
});
$("#dot2c").click(function () {
  showSlidec(2);
});

$("#dot3c").click(function () {
  showSlidec(3);
});
$("#dot4c").click(function () {
  showSlidec(4);
});
$("#dot5c").click(function () {
  showSlidec(5);
});
$("#dot6c").click(function () {
  showSlidec(6);
});
$("#dot7c").click(function () {
  showSlidec(7);
});
$("#dot8c").click(function () {
  showSlidec(8);
});
$("#dot9c").click(function () {
  showSlidec(9);
});
$("#dot10c").click(function () {
  showSlidec(10);
});
$("#dot11c").click(function () {
  showSlidec(11);
});
$("#dot12c").click(function () {
  showSlidec(12);
});

//KENYA
// Gallery Interactivity for Kenya Pictures
$("#nextk").click(function () {
  nextSlidek();
});

$("#lastk").click(function () {
  prevSlidek();
});

/* TODO: Replace TODO_SLIDES_CSS_SELECTOR with a CSS selector that selects _all_ slides. (See "hint" above in access element snippet.) */
const SLIDESK = $(".slidek");
const DOTSK = $(".dk");

/* See "show next slide snippet" to use */
function nextSlidek() {
  /* TODO: Replace TODO_CSS_HIDDEN_CLASS with the name of the class you will use to hide the non-active slides (i.e. `hidden`). */
  let nextNumk = SLIDESK.index($(".slidek:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNumk > SLIDESK.length) {
    nextNumk = 1;
  }
  showSlidek(nextNumk);
}

/* See "show previous slide snippet" to use */
function prevSlidek() {
  let prevNumk = SLIDESK.index($(".slidek:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNumk <= 0) {
    prevNumk = SLIDESK.length;
  }
  showSlidek(prevNumk);
}

function showSlidek(num) {
  let indexk = num - 1;
  let currentSlidek = SLIDESK.eq(indexk);
  let currentDotk = DOTSK.eq(indexk);
  console.log(currentSlidek)
  SLIDESK.addClass("accessible-hidden")
  currentSlidek.removeClass("accessible-hidden")
  DOTSK.addClass("d")
  DOTSK.removeClass("dp")
  currentDotk.removeClass("d")
  currentDotk.addClass("dp")

}
$("#dot1k").click(function () {
  showSlidek(1);
});


$("#dot2k").click(function () {
  showSlidek(2);
});

$("#dot3k").click(function () {
  showSlidek(3);
});

$("#dot4k").click(function () {
  showSlidek(4);
});

$("#dot5k").click(function () {
  showSlidek(5);
});

//AFRIQUE
//AFRIQUE PICTURES
$("#nexta").click(function () {
  nextSlidea();
});

$("#lasta").click(function () {
  prevSlidea();
});


const SLIDESA = $(".slidea");
const DOTSA = $(".da");

/* See "show next slide snippet" to use */
function nextSlidea() {

  let nextNuma = SLIDESA.index($(".slidea:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNuma > SLIDESA.length) {
    nextNuma = 1;
  }
  showSlidea(nextNuma);
}

/* See "show previous slide snippet" to use */
function prevSlidea() {
  let prevNuma = SLIDESA.index($(".slidea:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNuma <= 0) {
    prevNuma = SLIDESA.length;
  }
  showSlidea(prevNuma);
}

function showSlidea(num) {
  let indexa = num - 1;
  let currentSlidea = SLIDESA.eq(indexa);
  let currentDota = DOTSA.eq(indexa);
  console.log(currentSlidea)
  SLIDESA.addClass("accessible-hidden")
  currentSlidea.removeClass("accessible-hidden")
  DOTSA.addClass("d")
  DOTSA.removeClass("dp")
  currentDota.removeClass("d")
  currentDota.addClass("dp")

}
$("#dot1a").click(function () {
  showSlidea(1);
});


$("#dot2a").click(function () {
  showSlidea(2);
});

$("#dot3a").click(function () {
  showSlidea(3);
});
$("#dot4a").click(function () {
  showSlidea(4);
});


//NICARAGUA

$("#nextn").click(function () {
  nextSliden();
});

$("#lastn").click(function () {
  prevSliden();
});


const SLIDESN = $(".sliden");
const DOTSN = $(".dn");

/* See "show next slide snippet" to use */
function nextSliden() {

  let nextNumn = SLIDESN.index($(".sliden:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNumn > SLIDESN.length) {
    nextNumn = 1;
  }
  showSliden(nextNumn);
}

/* See "show previous slide snippet" to use */
function prevSliden() {
  let prevNumn = SLIDESN.index($(".sliden:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNumn <= 0) {
    prevNumn = SLIDESN.length;
  }
  showSliden(prevNumn);
}

function showSliden(num) {
  let indexn = num - 1;
  let currentSliden = SLIDESN.eq(indexn);
  let currentDotn = DOTSN.eq(indexn);
  console.log(currentSliden)
  SLIDESN.addClass("accessible-hidden")
  currentSliden.removeClass("accessible-hidden")
  DOTSN.addClass("d")
  DOTSN.removeClass("dp")
  currentDotn.removeClass("d")
  currentDotn.addClass("dp")

}
$("#dot1n").click(function () {
  showSliden(1);
});


$("#dot2n").click(function () {
  showSliden(2);
});

$("#dot3n").click(function () {
  showSliden(3);
});

//PEACE CORP
$("#nextp").click(function () {
  nextSlidep();
});

$("#lastp").click(function () {
  prevSlidep();
});


const SLIDESP = $(".slidep");
const DOTSP = $(".dpc");

/* See "show next slide snippet" to use */
function nextSlidep() {

  let nextNump = SLIDESP.index($(".slidep:not(.accessible-hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNump > SLIDESP.length) {
    nextNump = 1;
  }
  showSlidep(nextNump);
}

/* See "show previous slide snippet" to use */
function prevSlidep() {
  let prevNump = SLIDESP.index($(".slidep:not(.accessible-hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNump <= 0) {
    prevNump = SLIDESP.length;
  }
  showSlidep(prevNump);
}

function showSlidep(num) {
  let indexp = num - 1;
  let currentSlidep = SLIDESP.eq(indexp);
  let currentDotp = DOTSP.eq(indexp);
  console.log(currentSlidep)
  SLIDESP.addClass("accessible-hidden")
  currentSlidep.removeClass("accessible-hidden")
  DOTSP.addClass("d")
  DOTSP.removeClass("dp")
  currentDotp.removeClass("d")
  currentDotp.addClass("dp")

}
$("#dot1p").click(function () {
  showSlidep(1);
});


$("#dot2p").click(function () {
  showSlidep(2);
});

$("#dot3p").click(function () {
  showSlidep(3);
});
