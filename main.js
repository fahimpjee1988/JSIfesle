
//Lev1_1_js-vertiefung_conditional-statements_score


function myFunction(){
    console.log("test")
    if (document.getElementById("age").value >=18){
        console.log(true);
        document.getElementById("id").innerHTML = "Volljährig!"
    }else{
        document.getElementById("id").innerHTML = "Minderjährig!"

    }
}

//Lev1_2_js-vertiefung_conditional-statements-quelitaet

function less(){
    if (document.getElementById("null").checked){
        document.getElementById("h2").innerHTML = "Slecht"
    } else if (document.getElementById("drei").checked){

            document.getElementById("h2").innerHTML = "'okay'"
        }else if (document.getElementById("sechs").checked){
            
            document.getElementById("h2").innerHTML = "gut"

        }else if(document.getElementById("acht").checked){

            document.getElementById("h2").innerHTML = "super'"

        }
    }

//Lev1_3_js-vertiefung_conditional-statements_mit-form

function greaterThen(){
    if(document.getElementById("input").value>=18){
        document.getElementById("shisha").innerHTML = "'Ja. Du kannst Shisha rauchen"

    }else if(document.getElementById("input").value<18){
        document.getElementById("shisha").innerHTML = "Du darfst leider noch nicht Shisha rauchen"
    }
}

