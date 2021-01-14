let inputs = document.getElementsByTagName('input');
let lastIndex = 0;
let currentIndex = 0;
const getInputs = () => {
  lastIndex = inputs.length;
  inputs[lastIndex - 1];
};

let list = document.querySelectorAll('.child');

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
    console.log($(this).parent().prev().html());
    const prevInput = $(this).parent().prev().first();
    console.log(prevInput.html());
    var all = $(':focusable');
    if (currentIndex <= 0) return;
    currentIndex -= 1;
    all.eq(currentIndex).focus();
  }
  if (e.which == 13) {
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
