// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Navbar view if user scrolled down 

const nav = document.querySelector('nav');

onscroll = _ => { 
  if(scrollY > 100) {
    nav.classList.add("bg-white");
  } else {
    nav.classList.remove("bg-white");
  }
}
