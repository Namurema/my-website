const  form = document.querySelector(".contact-form");
if(form) {
  form.addEventListener("submit",function(e) {
    e.preventDefault();
    alert("Thanks for reaching out, I will get back to you soon!");
    form.reset();
  });
}
