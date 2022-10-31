import { useEffect, useMemo,useState } from "react";


function CountdownTimer({hours,minutes,seconds}) {
    const [time, setTime] = useState({
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(seconds)
      });
    const [counter, setCounter] = useState(1)
    let finalSeconds = (hours * 60 + minutes) * 60;
   
    function tick() {
        if (time.hours == 0 && time.minutes == 0 && time.seconds == 0)
      setOver(true);
    else if (time.minutes == 0 && time.seconds == 0)
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (time.seconds == 0)
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59
      });
    else
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
    }
    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
      });
    return (<>
        <p>{time.hours + ":hrs" + time.minutes + ":mins" + time.seconds + ":secs"}</p>
        
    </>);
}
export default CountdownTimer;