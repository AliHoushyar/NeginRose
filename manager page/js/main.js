let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
var dropdown = document.getElementById('managerDRP');
var dropdownn = document.getElementById('travelDRP');
var drpbtn1 = document.getElementById('drpbtn1');
var drpbtn2 = document.getElementById('drpbtn2');

closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    if(dropdown.style.display == "block"){
        dropdown.style.display = "none";
        drpbtn1.classList.replace("bxs-up-arrow", "bxs-down-arrow");
    }
    menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
});

        // following are the code to change sidebar button(optional)
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-left");//replacing the iocns class
    }
    else{
        closeBtn.classList.replace("bx-menu-alt-left","bx-menu");//replacing the iocns class
    }
}

function changer(n){
    if(n==1){
        if(dropdown.style.display == "block"){
            dropdown.style.display = "none";
            drpbtn1.classList.replace("bxs-up-arrow", "bxs-down-arrow");
        }
        else{
            dropdown.style.display = "block";
            if(dropdownn.style.display == "block"){
                dropdownn.style.display = "none";
                drpbtn2.classList.replace("bxs-up-arrow", "bxs-down-arrow");
            }
            drpbtn1.classList.replace("bxs-down-arrow", "bxs-up-arrow");
        }
    }
    else{
        if(dropdownn.style.display == "block"){
            dropdownn.style.display = "none";
            drpbtn2.classList.replace("bxs-up-arrow", "bxs-down-arrow");
        }
        else{
            dropdownn.style.display = "block";
            if(dropdown.style.display == "block"){
                dropdown.style.display = "none";
                drpbtn1.classList.replace("bxs-up-arrow", "bxs-down-arrow");
            }
            drpbtn2.classList.replace("bxs-down-arrow", "bxs-up-arrow");
        }
    }
}