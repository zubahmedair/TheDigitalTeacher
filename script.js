function calculateTime(){

    let teachers = document.getElementById("teachers").value;

    if(teachers==""){

        teachers=0;

    }

    let hours = teachers*4;

    document.getElementById("hours").innerHTML=hours+"+ Hours";

}