let nama = document.getElementById("name_inp");
let eml = document.getElementById("email_inp");
let subj = document.getElementById("subj_inp");
let msg = document.getElementById("msg_inp");
let forms = document.getElementById("form-cont");

forms.addEventListener("submit",function(event){
    event.preventDefault();
    let states = [1,1,1];
    if (nama.value.length<3) {
        document.getElementById("name_err").style.display="block";
        states[0] = 0;
    }
    else{
        document.getElementById("name_err").style.display="none";
        states[0] = 1;
    }
    if(eml.value.length<=0){
        document.getElementById("email_err_blank").style.display="block";
        document.getElementById("email_err_atdotcom").style.display="none";
        states[1] = 0;
    }
    else if(!(eml.value.includes("@") && eml.value.includes(".com"))){
        document.getElementById("email_err_blank").style.display="none";
        document.getElementById("email_err_atdotcom").style.display="block";
        states[1] = 0;
    }
    else{
        document.getElementById("email_err_blank").style.display="none";
        document.getElementById("email_err_atdotcom").style.display="none";
        states[1] = 1;
    }
    let mesage = msg.value.split(' ');
    if(mesage.length<3 || mesage[2]==='' ||
    (mesage[0]==='' && mesage.length===3)){
        document.getElementById("msg_err").style.display="block";
        states[2] = 0;
    }
    else{
        document.getElementById("msg_err").style.display="none";
        states[2] = 1;
    }

    if(states[0]===1 && states[1]===1 && states[2]===1){
        forms.submit();
    }
});