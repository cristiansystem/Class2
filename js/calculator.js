// Function for calculate

function calculateTriangule() {
    var form = document.forms["myFormCalculator"];
    const data = [];
    let result;
    for (let i = 0; i < form.elements.length; i++) {
        data.push(form.elements[i].value);
    }

    if (data.length == 2) {
        result = (data[0] * data[1]) / 2;
    } else {
        result = "There aren't params for calculate";
    }

    $("#resultCalculator").text(result);
    $("#result").removeAttr('hidden');
}

function reset() {
    document.forms["myFormCalculator"]["numBase"].value = "";
    document.forms["myFormCalculator"]["numHeight"].value = "";
    $("#result").hide();
}