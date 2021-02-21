let quill = null;
$(document).ready(function () {
  quill = new Quill('#editor', { placeholder: '' });
  quill.focus();
  // $('.ql-editor p').text('a').focus();

  $('#bookmarkme').click(function () {
    if (window.sidebar && window.sidebar.addPanel) {
      // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && 'AddFavorite' in window.external) {
      // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) {
      // Opera Hotlist
      this.title = document.title;
      return true;
    } else {
      // webkit - safari/chrome
      alert(
        'Press ' +
          (navigator.userAgent.toLowerCase().indexOf('mac') != -1
            ? 'Command/Cmd'
            : 'CTRL') +
          ' + D to bookmark this page.'
      );
    }
  });
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
    $('.ql-editor p').fadeOut(500);
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
  console.log(str);
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
  // if (e.which == 8 && $(this).val() === '') {
  //   console.log('in delete');
  //   const prevInput = $(this).parent().prev().first().find('input');
  //   prevInput.focus();
  //   console.log(prevInput.html());
  //   // var all = $(':focusable');
  //   // if (currentIndex <= 0) return;
  //   // currentIndex -= 1;
  //   // al
  //   l.eq(currentIndex).focus();
  // }
  // if (e.which == 13 || $(this).val().length >= maxChar) {
  //   currentIndex += 1;
  //   if (this === inputs[lastIndex - 1]) {
  //     $('.contaienr').append(
  //       '<div><input type="text" class="input" value=""  /></div>'
  //     );
  //   }
  //   e.preventDefault();
  //   // Get all focusable elements on the page
  //   var $canfocus = $(':focusable');
  //   var index = $canfocus.index(this) + 1;
  //   if (index >= $canfocus.length) index = 0;
  //   $canfocus.eq(index).focus();
  // }
  // var me = $(this);
  // if (isEnglish(me.val())) {
  //   me.css('text-align', 'left');
  // } else {
  //   me.css('text-align', 'right');
  // }
});
