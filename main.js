
//byter sko bilden när man klicka på olika färger 
function ÄndraFärg(){ 
    document.getElementById("airmax").src="nike_airmax_blå.png";     
}

function ÄndraFärgGrå(){
    document.getElementById("airmax").src="nike_airmax.png";
}

function ÄndraFärgRöd(){
    document.getElementById("airmax").src="nike_airmax_röd.png";
}

//öppnar den externa navigationsfältet
function toggle(){
    let klick = document.getElementById('klick');
    let nav = document.getElementById('nav');
    klick.classList.toggle('active')
    nav.classList.toggle('active')
}