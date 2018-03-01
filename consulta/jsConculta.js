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

function display(cnp) {
      alert(encodeURI(cnp));
      window.location.assign("http://localhost:88/check/check.html");

    }

