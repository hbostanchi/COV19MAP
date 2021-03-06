$("path, polyline, polygon").hover(function(e) {
  // make tooltip visible
  $('#info-box').css('display','block');
  // get date from selector element
  const Date = document.querySelector('#myList').value;
  console.log(Date);
  // filter the `data` array for counties just in that date
  const filtered = data.filter(d => d.date == Date);
  console.log(filtered);
  // filter counties of that date to just the one county matching the id of 
  // the path that is being hovered on 
  const county = filtered.filter(d => d.id == $(this).attr('id'))[0];
  console.log(county);
  // create the html string to populate the tooltip with 
  // as long as the key isn't 'id' then continue building
  let county_html = '';
  Object.entries(county).forEach(([key, value]) => {
    if (key !== 'id' && key !== 'undefined' && key !== 'null') {
      county_html += `${key}: ${value}<br>`;
    }
  });
  // change value of tooltip to html we just made
  $('#info-box').html(county_html);
});
$("path, polyline, polygon").mouseleave(function(e) {
  $('#info-box').css('display','none');
});
$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();
var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}
function getOption() {
  const selectElement = document.querySelector('#myList');
  output = selectElement.value;
  document.querySelector('.output').textContent = output;
}
