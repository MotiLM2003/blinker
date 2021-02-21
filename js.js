let quill = null;
$(document).ready(function () {
  quill = new Quill('#editor', { placeholder: '' });
  quill.focus();
  // $('.ql-editor p').text('a').focus();
});

const clickEvent = () => {
  let hasLetters = false;

  hasLetters = quill.getText(0, 10).trim() !== '';

  if (!hasLetters) {
    $('#arrow').addClass('blink2');
    quill.focus();
    setTimeout(() => {
      $('#arrow').removeClass('blink2');
      quill.focus();
    }, 2500);
    return;
  }

  btnContaienr.style.background = 'transparent';
  $(btnContaienr).addClass('blink');
  document
    .getElementById('button-container')
    .removeEventListener('click', clickEvent);

  setTimeout(() => {
    $(thanks).fadeOut(1000);
    $('.ql-editor p').fadeOut(1500);
    quill.disable();
    $(icon).fadeIn(1000);
    $(btnContaienr).removeClass('blink');
  }, 5000);
};

const isEnglish = (text) => {
  const paragraph = text;
  const reg = '^[a-zA-Z0-9 ,;./!,]*$';
  const found = paragraph.match(reg);

  return found;
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

// getInputs();

// register jQuery extension
jQuery.extend(jQuery.expr[':'], {
  focusable: function (el, index, selector) {
    return $(el).is('a, button, :input, [tabindex]');
  },
});

function contains_heb(str) {
  return /[\u0590-\u05FF]/.test(str);
}

$(document).on('keyup', function (e) {
  $('.ql-editor p').each(function () {
    var me = $(this);
    const isHeb = contains_heb(me.text());
    me.removeClass('rtl');
    if (isHeb) {
      me.addClass('rtl');
    }
  });
});
