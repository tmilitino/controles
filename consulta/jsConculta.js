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


//checkboxes filter

function stats(){
  var opts = [];
  $checkboxes.each(function(){
    if(checkbox.checked){
      opts.push(checkbox.name);
    }
  });

  return opts;
}

var $checkboxes = $("input:checkbox");
      $checkboxes.on("change", function(){
        var opts = stats();
        filtro(opts);
      });




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