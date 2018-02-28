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

$('#inlineLucro').change(function () {
    var r = $('#inlineLucro').maskMoney('unmasked')[0];
    console.log(r);
})

$('#inlineFormInputGroupReceitaBruta').change(function () {
    if ($('#inlineFormInputGroupReceitaBruta').maskMoney('unmasked')[0] > 36) {
        $("#res").hide();
        $("#com").show();
    } else {
        $("#com").hide();
        $("#res").show();
    }
});


$('#inlinePL').change(function () {
    if ($('#inlinePL').maskMoney('unmasked')[0] > 1000000) {
        alert("Publicar!");  
    }
});

$('#inlineAcionistas').change(function () {
    if ($('#inlineAcionistas').val() >= 20) {
        alert("Publicar!");  
    }
});

//mascara monetaria e block de caracteres

$(document).ready(function () {
    $("#inlineCaptalSocial").maskMoney({
        decimal: ",",
        thousands: "."
    });
});

$(document).ready(function () {
    $("#inlineReservalegal").maskMoney({
        decimal: ",",
        thousands: "."
    });
});

$(document).ready(function () {
    $("#inlineLucro").maskMoney({
        decimal: ",",
        thousands: "."
    });
});

$(document).ready(function () {
    $("#inlineFormInputGroupReceitaBruta").maskMoney({
        decimal: ",",
        thousands: "."
    });
});

$(document).ready(function () {
    $('#inlineAcionistas').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
});

$(document).ready(function () {
    $("#inlinePL").maskMoney({
        decimal: ",",
        thousands: "."
    });
});