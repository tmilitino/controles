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


$('#inlineFormInputGroupReceitaBruta').change(function () {
    if ($('#inlineFormInputGroupReceitaBruta').val() > 36000000) {
        $("#res").hide();
        $("#com").show();
    } else {
        $("#com").hide();
        $("#res").show();
    }
});

//mascara monetaria e block de caracteres

$(document).ready(function(){
     $("#inlineCaptalSocial").maskMoney({
         decimal: ",",
         thousands: "."
     });
});

$(document).ready(function(){
     $("#inlineReservalegal").maskMoney({
         decimal: ",",
         thousands: "."
     });
});

$(document).ready(function(){
     $("#inlineLucro").maskMoney({
         decimal: ",",
         thousands: "."
     });
});

$(document).ready(function(){
     $("#inlineFormInputGroupReceitaBruta").maskMoney({
         decimal: ",",
         thousands: "."
     });
});