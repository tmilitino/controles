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



//bloqueio para não digitar letras ou outros caracteres,

$(document).ready(function () {
    $('#inlineFormInputGroupReceitaBruta').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#errmsg0").html("Só numeros").show().fadeOut("slow");
            return false;
        }
    });
});


$(document).ready(function () {
    $('#inlineLucro').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#errmsg3").html("Só numeros").show().fadeOut("slow");
            return false;
        }
    });
});


$(document).ready(function () {
    $('#inlineReservalegal').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#errmsg2").html("Só numeros").show().fadeOut("slow");
            return false;
        }
    });
});

$(document).ready(function () {
    $('#inlineCaptalSocial').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            $("#errmsg1").html("Só numeros").show().fadeOut("slow");
            return false;
        }
    });
});


$('#inlineFormInputGroupReceitaBruta').change(function () {
    if ($('#inlineFormInputGroupReceitaBruta').val() > 36000000) {
        $("#res").hide();
        $("#com").show();
    } else {
        $("#com").hide();
        $("#res").show();
    }
});

//mascara monetaria

$(document).ready(function()
{
     $("#inlineCaptalSocial").maskMoney({
         decimal: ",",
         thousands: "."
     });
});

$(document).ready(function()
{
     $("#inlineReservalegal").maskMoney({
         decimal: ",",
         thousands: "."
     });
});

$(document).ready(function()
{
     $("#inlineLucro").maskMoney({
         decimal: ",",
         thousands: "."
     });
});

$(document).ready(function()
{
     $("#inlineFormInputGroupReceitaBruta").maskMoney({
         decimal: ",",
         thousands: "."
     });
});