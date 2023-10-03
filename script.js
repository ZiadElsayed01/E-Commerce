const bar = document.getElementById("bar"),
  nav = document.getElementById("navbar"),
  close = document.getElementById("close");
bar &&
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  }),
  close &&
    close.addEventListener("click", () => {
      nav.classList.remove("active");
    });
