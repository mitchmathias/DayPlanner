var currentTime = moment().format('HH')

$(document).ready(function () {
    var currentDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(currentDate)


    if (currentTime === '9') {
        $("#9amText").addClass("present")
    }
    else if (currentTime > 9) {
        $("#9amText").addClass("past")
    }
    else if (currentTime < 9) {
        $("9amText").addClass("future")
    }


    if (currentTime === '10') {
        $("#10amText").addClass("present")
    }
    else if (currentTime > 10) {
        $("#10amText").addClass("past")
    }
    else if (currentTime < 10) {
        $("10amText").addClass("future")
    }


    if (currentTime === '11') {
        $("#11amText").addClass("present")
    }
    else if (currentTime > 11) {
        $("#11amText").addClass("past")
    }
    else if (currentTime < 11) {
        $("11amText").addClass("future")
    }


    if (currentTime === '12') {
        $("#12amText").addClass("present")
    }
    else if (currentTime > 12) {
        $("#12amText").addClass("past")
    }
    else if (currentTime < 12) {
        $("12amText").addClass("future")
    }

    if (currentTime === '13') {
        $("#1pmText").addClass("present")
    }
    else if (currentTime > 13) {
        $("#1pmText").addClass("past")
    }
    else if (currentTime < 13) {
        $("1pmText").addClass("future")
    }

    if (currentTime === '14') {
        $("#2pmText").addClass("present")
    }
    else if (currentTime > 14) {
        $("#2pmText").addClass("past")
    }
    else if (currentTime < 14) {
        $("2pmText").addClass("future")
    }


    if (currentTime === '15') {
        $("#3pmText").addClass("present")
    }
    else if (currentTime > 15) {
        $("#3pmText").addClass("past")
    }
    else if (currentTime < 15) {
        $("3pmText").addClass("future")
    }


    if (currentTime === '16') {
        $("#4pmText").addClass("present")
    }
    else if (currentTime > 16) {
        $("#4pmText").addClass("past")
    }
    else if (currentTime < 16) {
        $("4pmText").addClass("future")
    }


    if (currentTime === '17') {
        $("#5pmText").addClass("present")
    }
    else if (currentTime > 17) {
        $("#5pmText").addClass("past")
    }
    else if (currentTime < 17) {
        $("5pmText").addClass("future")
    }

});

var input9am = $("#9amText").val();
$("#9amText").val(localStorage.getItem("input9am", input9am));

var input10am = $("#10amText").val();
$("#10amText").val(localStorage.getItem("input10am", input10am));

var input11am = $("#11amText").val();
$("#11amText").val(localStorage.getItem("input11am", input11am));

var input12am = $("#12amText").val();
$("#12amText").val(localStorage.getItem("input12am", input12am));

var input1pm = $("#1pmText").val();
$("#1pmText").val(localStorage.getItem("input1pm", input1pm));

var input2pm = $("#2pmText").val();
$("#2pmText").val(localStorage.getItem("input2pm", input2pm));

var input3pm = $("#3pmText").val();
$("#3pmText").val(localStorage.getItem("input3pm", input3pm));

var input4pm = $("#4pmText").val();
$("#4pmText").val(localStorage.getItem("input4pm", input4pm));

var input5pm = $("#5pmText").val();
$("#5pmText").val(localStorage.getItem("input5pm", input5pm));


$("#save9am").click(function () {
    var input9am = $("#9amText").val();
    localStorage.setItem("input9am", input9am)
})

$("#save10am").click(function () {
    var input10am = $("#10amText").val();
    localStorage.setItem("input10am", input10am)
})

$("#save11am").click(function () {
    var input11am = $("#11amText").val();
    localStorage.setItem("input11am", input11am)
})

$("#save12am").click(function () {
    var input12am = $("#12amText").val();
    localStorage.setItem("input12am", input12am)
})

$("#save1pm").click(function () {
    var input1pm = $("#1pmText").val();
    localStorage.setItem("input1pm", input1pm)
})

$("#save2pm").click(function () {
    var input2pm = $("#2pmText").val();
    localStorage.setItem("input2pm", input2pm)
})

$("#save3pm").click(function () {
    var input3pm = $("#3pmText").val();
    localStorage.setItem("input3pm", input3pm)
})

$("#save4pm").click(function () {
    var input4pm = $("#4pmText").val();
    localStorage.setItem("input4pm", input4pm)
})

$("#save5pm").click(function () {
    var input5pm = $("#5pmText").val();
    localStorage.setItem("input5pm", input5pm)
})
