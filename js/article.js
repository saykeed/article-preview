
let grabSharing = document.querySelector("#sharing");
let grabProfile = document.querySelector("#profile");
let pageSize = document.querySelector("#mobile_main").offsetWidth;

let shareStatus = false;

let share = function () {
    if (shareStatus === false) {
        if (pageSize <= 500) {
            grabSharing.style.display = "flex";
            grabProfile.style.display = "none";

            shareStatus = true;
            
        } else if (pageSize > 500) {
            grabSharing.style.display = "flex";
            grabProfile.style.display = "flex";
            
            shareStatus = true;
        }
        
    } 
}

