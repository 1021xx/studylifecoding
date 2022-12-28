// function linksSetColor(color) {
//   let alist = document.querySelectorAll('a');
//   let i = 0;
//   while(i < alist.length) {
//     alist[i].style.color = color;
//     i = i + 1;
//   }
// }
// function bodySetColor(color) {
//   document.querySelector('body').style.color = color;
// }
// function bodySetBackgroundColor(color) {
//   document.querySelector('body').style.backgroundColor = color;
// }


// jQuery 코드
const body = {
  setColor: function(color) {
    $('body').css('color', color);
    // document.querySelector('body').style.color = color; // js 코드
  },
  setBackgroundColor: function(color) {
    $('body').css('backgroundColor', color);
    // document.querySelector('body').style.backgroundColor = color; // js 코드
  }
}

// jQuery 코드
const links = {
  setColor: function(color) {
    $('a').css('color', color);
    // js 코드
    /* let alist = document.querySelectorAll('a');
    let i = 0;
    while(i < alist.length) {
    alist[i].style.color = color;
    i++; */ 
  }
}

const borders = {
  setColor: function(color) {
    $('h1, .list').css('border-color', color);
  }
}

function nightDayHandler(self) {
  const target = document.querySelector('body');
  if(self.value === '🌜') {
    body.setBackgroundColor('#333');
    body.setColor('#fff');
    self.value = '🌞';
    links.setColor('pink');
    borders.setColor('#fff');
  } else {
    body.setBackgroundColor('#fff');
    body.setColor('#333');
    self.value = '🌜';
    links.setColor('teal');
    borders.setColor('teal');
  }
}

