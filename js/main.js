const title = document.querySelector(".titlee");
const btn = document.querySelector(".btnn");
const TEL_NUMBERS = [
  "+998 99 076 11 01",
  "+998 99 943 48 88",
  "+998 99 750 13 41",
  "+998 91 324 43 56",
  "+998 90 320 00 00",
  "+998 99 776 22 22",
  "+998 50 009 16 21",
  "+998 77 075 75 01",
  "+998 93 833 16 21",
];
console.log(btn);
btn.addEventListener("click", () => {
  let interval = setInterval(() => {
    let index = Math.floor(Math.random() * TEL_NUMBERS.length);
    title.textContent = TEL_NUMBERS[index];
  }, 50);
  setTimeout(() => {
    clearInterval(interval);
  }, 2500);
});
