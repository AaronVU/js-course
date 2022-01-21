let horaDia = 5;

if(horaDia >= 6 && horaDia <= 11){
    console.log("Buenos días");
}
else if(horaDia >= 12 && horaDia <= 18){
    console.log("Buenas Tardes");
}
else if(horaDia >= 19 && horaDia <= 23){
    console.log("Buenas Noches")
}
else if(horaDia >= 0 && horaDia <= 5){
    console.log("Duermiendo");
}
else{
    console.log("Esa hora del día no existe");
}