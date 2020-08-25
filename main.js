const hr = document.querySelector(".hour");
const mn = document.querySelector(".minute");
const sec = document.querySelector(".secund");

setInterval(() => {
  let day = new Date();
  let hour = day.getHours();
  let minutes = day.getMinutes();
  let secunds = day.getSeconds();

  let hrRotation = (30 * hour) + (0.5 * minutes);
  let mnRotation = 6 * minutes;
  let secRotation = 6 * secunds;

    hr.style.transform = `translate(-50%, -100%) rotate(${hrRotation}deg)`;
    mn.style.transform = `translate(-50%, -100%) rotate(${mnRotation}deg)`;
    sec.style.transform = `translate(-50%, -100%) rotate(${secRotation}deg)`;
}, 1000);