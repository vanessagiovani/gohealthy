var form = document.forms['orderForm']
var errorName = document.getElementById('error-name')
var errorEmail = document.getElementById('error-email')
var errorPassword = document.getElementById('error-password')
var errorPhone = document.getElementById('error-phone')

function validateForm(e){
    
    var isValid = true

    if(form['name'].value ==""){
        errorName.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['email'].value ==""){
        errorEmail.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['password'].value ==""){
        errorPassword.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(form['phone'].value == ""){
        errorPhone.innerText = "*Required Field"
        isValid = false
        e.preventDefault()
    }

    if(isValid == true){
        var confirmed = confirm('Do you want to submit?')
        if(confirmed == true){
            alert('An link has been sent to your email, click the link to activate your account!')
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