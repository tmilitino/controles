$(document).ready(function () {

  load_data();

  function load_data(query) {
    $.ajax({
      url: "consulta.php",
      method: "POST",
      data: { query: query },
      success: function (data) {
        $('#result').html(data);
      }
    });
  }
  $('#search_text').keyup(function () {
    var search = $('#search_text').val();
    if (search != '') {
      load_data(search);
    }
    else {
      load_data();
    }
  });
});

var data1

function display(cnp) {
  $.ajax({
    url: "check/ccheck.php",
    method: "POST",
    data: { cnp: cnp },
    success: function (data) {
      alert(data);
    }
  });
}