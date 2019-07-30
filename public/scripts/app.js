/* 
 * CLIENT-SIDE JS
 */

$(document).ready(function() {
  console.log('app.js loaded!');

  $.ajax({
    method: 'GET',
    url: '/api',
    success: handleSuccess,
    error: handleError
  });
})

function handleSuccess(json) {
  console.log('SUCCESS');
  render();
}

function handleError(e) {
  console.log('uh oh');
}