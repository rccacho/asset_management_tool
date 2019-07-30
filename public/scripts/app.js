/* 
 * CLIENT-SIDE JS
 */

$(document).ready(function() {
  console.log('app.js loaded!');

  var users = [];

  $.ajax({
    method: 'GET',
    url: '/api',
    success: handleSuccess,
    error: handleError
  });

  // make a GET request for all users
  $.ajax({
    method: 'GET',
    url: '/api/user',
    success: handleSuccess,
    error: handleError
  });

})

function handleSuccess(json) {
  console.log('SUCCESS');
  users = json;
  render();
}

function handleError(xhr, ajaxOptions, thrownError) {
  console.log('uh oh');
  console.log(xhr);
  console.log(ajaxOptions);
  console.log(thrownError);
}