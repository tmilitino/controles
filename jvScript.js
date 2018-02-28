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