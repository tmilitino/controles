var cChecked = function () {
            if ($('#customControlInline').is(":checked")) {
                $("#teste").hide(1000);
                $("#bloc").show(1000);
            } else {

                $("#teste").show(1000);
                $("#bloc").hide();
            }

            //return ($('#customControlInline').is(":checked") ?  $("#teste").hide() : $("#teste").show());
        };
        cChecked();
        $("input[type=checkbox]").on("click", cChecked);
        
        $("#res").hide();
        $("#com").hide();

        $(document).ready(function () {
            //called when key is pressed in textbox
            $('#inlineFormInputGroupReceitaBruta').keypress(function (e) {
               //if the letter is not digit then display error and don't type anything
               if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                  //display error message
                  $("#errmsg").html("Só numeros").show().fadeOut("slow");
                         return false;
              }
             });
          });


      $('#inlineFormInputGroupReceitaBruta').change(function(){
            if($('#inlineFormInputGroupReceitaBruta').val()>36000000){
                $("#res").hide();
                $("#com").show();
            }else{
                $("#com").hide();
                $("#res").show();
                }
            });