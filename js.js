let list = document.querySelectorAll('.child');

// register jQuery extension
jQuery.extend(jQuery.expr[':'], {
  focusable: function (el, index, selector) {
    return $(el).is('a, button, :input, [tabindex]');
  },
});

$(document).on('keypress', 'input,select', function (e) {
  if (e.which == 13) {
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
    console.log(me.val());
    me.css('text-align', 'right');
  }
  console.log($(this).val());
});

const isEnglish = (text) => {
  const paragraph = text;
  const reg = '^[a-zA-Z0-9]*$';
  const found = paragraph.match(reg);
  console.log(found);
  return found;
};

Array.from(list).forEach(function (e) {
  e.addEventListener('click', () => {
    console.log('click');
  });
});

Array.from(list).forEach(function (e) {
  e.addEventListener('keyup', () => {
    if (e.code == 'Enter') {
      console.log('pressed enter');
    }
  });
});
