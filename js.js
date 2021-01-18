let inputs = document.getElementsByTagName('input');
let lastIndex = 0;
let currentIndex = 0;
const getInputs = () => {
  lastIndex = inputs.length;
  inputs[lastIndex - 1];
};

const screen = $(window).width();
let maxChar = 0;
if (screen >= 2400) {
  maxChar = 1800;
} else if (screen >= 2000) {
  maxChar = 120;
} else if (screen >= 1700) {
  maxChar = 80;
} else if (screen >= 1200) {
  maxChar = 78;
} else if (screen >= 1000) {
  maxChar = 66;
} else if (screen >= 800) {
  maxChar = 53;
} else if (screen >= 600) {
  maxChar = 35;
} else if (screen >= 400) {
  maxChar = 22;
} else if (screen >= 300) {
  maxChar = 20;
} else if (screen >= 270) {
  maxChar = 0;
}

const clickEvent = () => {
  let hasLetters = false;
  $('input[type="text"]').each(function (index) {
    let me = $(this);

    const value = me.val();
    if (value !== '') {
      hasLetters = true;
    }
  });

  if (!hasLetters) {
    $('#arrow').addClass('blink2');
    setTimeout(() => {
      $('#arrow').removeClass('blink2');
    }, 2500);
    return;
  }
  $('input[type="text"]').css({ color: 'white' }).attr('disabled', 'disabled');
  btnContaienr.style.background = 'transparent';
  $(btnContaienr).addClass('blink');
  document
    .getElementById('button-container')
    .removeEventListener('click', clickEvent);

  setTimeout(() => {
    $(thanks).fadeOut(1000);

    $(icon).fadeIn(1000);
    $(btnContaienr).removeClass('blink');
  }, 5000);
};

const dade = document.getElementById('fade');
const thanks = document.getElementById('thanks');
const btnContaienr = document.getElementById('button-container');
const icon = document.getElementById('v-icon');
let list = document.querySelectorAll('.child');
$(icon).fadeOut(0);
document
  .getElementById('button-container')
  .addEventListener('click', clickEvent);

getInputs();

$(inputs[currentIndex]).focus();
// register jQuery extension
jQuery.extend(jQuery.expr[':'], {
  focusable: function (el, index, selector) {
    return $(el).is('a, button, :input, [tabindex]');
  },
});

$(document).on('keyup', 'input,select', function (e) {
  if (e.which == 8 && $(this).val() === '') {
    const prevInput = $(this).parent().prev().first();
    var all = $(':focusable');
    if (currentIndex <= 0) return;
    currentIndex -= 1;
    all.eq(currentIndex).focus();
  }
  if (e.which == 13 || $(this).val().length >= maxChar) {
    currentIndex += 1;
    if (this === inputs[lastIndex - 1]) {
      $('.contaienr').append(
        '<div><input type="text" class="input" value=""  /></div>'
      );
      getInputs();
    }
    e.preventDefault();
    // Get all focusable elements on the page
    var $canfocus = $(':focusable');
    var index = $canfocus.index(this) + 1;
    if (index >= $canfocus.length) index = 0;
    $canfocus.eq(index).focus();
  }

  var me = $(this);
  if (isEnglish(me.val())) {
    me.css('text-align', 'left');
  } else {
    me.css('text-align', 'right');
  }
});

const isEnglish = (text) => {
  const paragraph = text;
  const reg = '^[a-zA-Z0-9 ,;./]*$';
  const found = paragraph.match(reg);

  return found;
};

Array.from(list).forEach(function (e) {
  e.addEventListener('click', () => {});
});

Array.from(list).forEach(function (e) {
  e.addEventListener('keyup', () => {
    if (e.code == 'Enter') {
      console.log('pressed enter');
    }
  });
});
