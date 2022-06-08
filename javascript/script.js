var form = document.forms['orderForm']
var errorAge = document.getElementById('error-age')
var errorHeight = document.getElementById('error-height')
var errorWeight = document.getElementById('error-weight')
var errorGender = document.getElementById('error-gender')
var errorExerciseHour = document.getElementById('error-exerciseHour')
var errorSleep = document.getElementById('error-sleep')
var errorSpecial = document.getElementById('error-special')

function validateForm(e){
    
    var isValid = true

    if(form['age'].value ==""){
        errorAge.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['height'].value ==""){
        errorHeight.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['weight'].value ==""){
        errorWeight.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['gender'].value =="0"){
        errorGender.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['exerciseHour'].value =="0"){
        errorExerciseHour.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['sleep'].value ==""){
        errorSleep.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['special'].value ==""){
        errorSpecial.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['agree'].checked == false){
        errorAgree.innerText = "*Must be checked"
        isValid = false
        e.preventDefault()
    }

    if(form['name'].value.length < 5){
        errorName.innerText += " *Minimum 5 characters"
        isValid = false
        e.preventDefault()
    }

    // Age minimal 1
    if(form['age'].value <= 0){
        errorAge.innerText += " *Minimum 1"
        isValid = false
        e.preventDefault()
    }

    if(isValid == true){
        var confirmed = confirm('Do you want to submit?')
        if(confirmed == true){
            alert('Thank you for ordering!')
        }
    }

    
    
    // // var name = document.getElementsByName('name')[0].value
    // var name = form['name'].value
    // if(name==""){
    //     alert("Name must be filled!")
    // }

    // // confirm bisa ok atau cancel
    // // prompt bisa terima input
    // // document.getElementById(namaId)
    // // document.forms[namaForm][namaField]
    // preventDefault() - mencegah page load ulang
}

// MONITOR HEALTH MONITOR HEALTH MONITOR HEALTH MONITOR HEALTH MONITOR HEALTH //
$(".intake-container").fadeIn("slow");
$(".intake-container").css("display", "flex");


function healthDataSave(){
    var starthour = document.forms["waterForm"]["start-hour"].value;
    var startminute = document.forms["waterForm"]["start-minute"].value;
    var endhour = document.forms["waterForm"]["end-hour"].value;
    var endminute = document.forms["waterForm"]["end-minute"].value;
    var amount = document.forms["waterForm"]["amount"].value;
    var msg = document.forms["waterForm"]["msg"].value;
    // var notif = document.forms["waterForm"]["sound"];

    if (starthour == "" || startminute == "" || endhour == "" || endminute == "" || amount == "" || msg == "" || msg == null){
        alert("Please fill in all field!");
        return false;
    }

    alert("Your data has been saved!");
    return true;
}

function addConsume(){
    var food = document.forms["dietForm"]["consume"].value; //this one is not working because it's a datalist
    alert("Yay");
    var portion = document.forms["dietForm"]["portion"].value;
   
    if (food == "[object HTMLInputElement]"){
        alert("Please fill your consumption for today");
    }

    alert("Thank you");
    
}
