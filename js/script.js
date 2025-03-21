let count = 1; 
let direction = 1;

document.getElementById("radio1").checked = true; 

setInterval( function(){
    nextImage();
}, 5000)

function nextImage() {
    count+= direction; 
    if(count > 4){
        count = 3;
        direction = -1;  
    }
    else if (count < 1){
        count = 2; 
        direction = 1; 
    }

    document.getElementById("radio" + count).checked = true; 
}