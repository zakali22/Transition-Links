$(document).ready(function() {
  var links = $('li');
  links.on('mouseenter', function(event) {
    event.preventDefault();
    /* Act on the event */
    var linkCoord = event.target.getBoundingClientRect();
    console.log(linkCoord);
    $('.highlight').css({
      'width': linkCoord.width + 'px',
      'height': linkCoord.height + 'px',
      'transform': 'translate(' + linkCoord.left + 'px, ' + linkCoord.top + 'px)'
    });
  });
});
