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
  $('#inlineConsulta').keyup(function () {
    var search = $('#inlineConsulta').val();
    if (search != '') {
      load_data(search);
    }
    else {
      load_data();
    }
  });
});


$('#block').change(
  function () {
    if ($('#block').is(":checked")) {
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
    }
  }
);
function display(cnp) {
  $.ajax({
    url: "check/ccheck.php",
    method: "POST",
    data: { cnp: cnp },
    success: function (data) {
      window.location = "http://localhost:88/check/check.html?cnpj=" + data;
    }
  });
}