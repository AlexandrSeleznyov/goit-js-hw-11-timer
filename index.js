class CountdownTimer{
 constructor ({selector, targetDate}){
  this.selector = document.querySelector(`${selector}`);
  this.targetDate = targetDate;
  this.timer()
}


pad(value) {
return String(value).padStart(2, "0");
}  

getTimerComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs};
  }

timer(){

  let timeInterval = setInterval(()=>{
  const currentDate = Date.now();
  const time = this.getTimerComponents(this.targetDate -  currentDate);
  console.log("time", time);
  if ((this.targetDate -  currentDate) <= 0){
    clearInterval(timeInterval);
    return;
  }
  console.log(time);
  console.log(time.secs);
  this.selector.children[1].firstElementChild.textContent = time.days;
  this.selector.children[1].firstElementChild.textContent = time.hours;
  this.selector.children[2].firstElementChild.textContent = time.mins;
  this.selector.children[3].firstElementChild.textContent = time.secs;

  }, 1000);
 
  }
}
  

  const newTimer = new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2021"),
  });
  
  










