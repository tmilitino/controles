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
    var r = parserInt($('#inlineFormInputGroupReceitaBruta').val());
    console.log(r>36);
})

$('#inlineFormInputGroupReceitaBruta').change(function () {
    if ($('#inlineFormInputGroupReceitaBruta').val() > 36) {
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

$(document).ready(function(){
    $('#inlineAcionistas').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
});

$(document).ready(function(){
    $("#inlinePL").maskMoney({
        decimal: ",",
        thousands: "."
    });
});