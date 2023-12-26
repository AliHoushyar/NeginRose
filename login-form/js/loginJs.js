const formEl = document.querySelector('.myForm');
var myBtn = document.getElementById("SubmitBtn");

myBtn.addEventListener("click",event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);

    console.log(data);
});