var testCodeBlock = "code works!"
localStorage.setItem("activeValues", " ");

var buttons = $("button");
console.log(buttons.length);

//buttons-set change functions
$("#special").click(function () {
    $("#grid-box-1").css("display", "none");
    $("#grid-box-2").css("display", "grid");
})

$("#special-2").click(function () {
    $("#grid-box-1").css("display", "grid");
    $("#grid-box-2").css("display", "none");
})

//button functions
$("button").click(function () {
    var buttonLabel = this.innerHTML;
    $("#active-calc").append(buttonLabel);

    var buttonValue = this.value;              //this is just for the display
    $(".active_values").append(buttonValue);

    var activeValues = $(".active_values").html();              //this are the actual values being used in calculation, hidden div in html
    console.log(activeValues)
    localStorage.setItem("activeValues", activeValues);

})

//clear and special-div functions
$("#reset").click(function () {
    document.getElementById("active-calc").innerHTML = "";         //clears display
    document.getElementById("result").innerHTML = "";
    $(".active_values").html("");                           //clears hidden div
    buttonValue = undefined;
})
$("#special").click(function () {
    document.getElementById("active-calc").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    buttonValue = undefined;
})


//calculation
$("#equals-sign").click(function () {
    var activeValues  = localStorage.getItem("activeValues")
    console.log(activeValues);

    var result = eval(activeValues);
    localStorage.setItem("active_answer", result);
   $("#result").html(result);
})

//Use previous answer
$("#active_answer").click(function() {
    var activeAnswer = localStorage.getItem("active_answer");
    console.log(activeAnswer);

    var display = document.getElementById("active-calc").innerHtml;
    console.log(display);
    if (display = " ") {
        $("#active-calc").append("Ans");
        $(".active_values").append  (activeAnswer);
        var activeValues = $(".active_values").html();      //this are the actual values being used in calculation, hidden div in html
        localStorage.setItem("activeValues", activeValues);
    }
    else {
       alert("clear screen first")
    }
})

// backspace function
$("#backspace").click(function(){
    var valuesOnDisplay = $("#active-calc").html();             // get text on display
    var valuesActual =  $(".active_values").html();          // get actual values from hidden div

    var newDisplayValues = valuesOnDisplay.toString().slice(0, -1);                      // remove last character from text on display and create new text
    var newActualValues = newDisplayValues;                                         // set the values on dislay as new  actual values;


    //at this point, values on display and values in hidden div are the same.
    console.log(newActualValues);


    $("#active-calc").html(newDisplayValues);                        // input new text in display
    $(".active_values").html(newActualValues);                  //input new values in hidden div

    localStorage.setItem("activeValues", newActualValues);    //set new values up for re-use
})


//V2.0 UPDATES
//Double click to access special operations
var buttonsBox = document.querySelector(".buttons");
var primaryNumbad = document.getElementById("grid-box-1");
var specialOpsPad = document.getElementById("grid-box-2");
buttonsBox.addEventListener("dblclick", function () {
    if (specialOpsPad.classList.contains("hidden")) {
        primaryNumbad.classList.add("hidden");
        specialOpsPad.classList.remove("hidden");
    }
   else{
        specialOpsPad.classList.add("hidden");
        primaryNumbad.classList.remove("hidden");
   }
});
