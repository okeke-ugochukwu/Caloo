//buttons change functions
$("#special").click(function () {
    $("#grid-box-1").css("display", "none");
    $("#grid-box-2").css("display", "grid");
})

$("#special-2").click(function () {
    $("#grid-box-1").css("display", "grid");
    $("#grid-box-2").css("display", "none");
})

//input  functions
$("input").click(function () {
    var inputValue = this.value;
    $("#active-calc").append(inputValue);
    console.log(inputValue);

})

//clear and special functions
$("#reset").click(function () {
    document.getElementById("active-calc").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    inputValue = undefined;
})
$("#special").click(function () {
    document.getElementById("active-calc").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    inputValue = undefined;
})