const comingSoon = document.querySelector(".coming-soon");
comingSoon.innerHTML = `
<div>
<h2 class="waiting">Ամանորին մնացել է ․․․</h2>
<div class="countdown">
  <div>
    <h3 class="day">Time</h3>
    <h3 >օր</h3>
  </div>
  <div>
    <h3 class="hour">Time</h3>
    <h3>ժամ</h3>
  </div>
  <div>
    <h3 class="minute">Time</h3>
    <h3>րոպե</h3>
  </div>
  <div>
    <h3 class="second">Time</h3>
    <h3>վայրկյան</h3>
  </div>
</div>
</div>
`
const countdown = () => {
    const set = setInterval(() => {
    const countDate = new Date("Dec 31, 2022 23:59:59").getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);
  
    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;

    if(remainingTime <= 0){
        clearInterval(set)
        document.querySelector(".waiting").innerText = "Շնորհավոր ամանոր"
    }
    }, 1000);
  };

  countdown();