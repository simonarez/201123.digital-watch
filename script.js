const hourContainer = document.querySelector(".hour--container");
const minutesContainer = document.querySelector(".minutes--container");
const secondsContainer = document.querySelector(".seconds--container");

const loadTime = () => {
  const currentTime = new Date();

  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  hourContainer.textContent = hour < 10 ? "0" + hour : hour;
  minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds;
};

loadTime();

setInterval(loadTime, 1000);
