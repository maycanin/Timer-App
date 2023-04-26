import './App.css'

function App() {

  let hour = 0;
  let minute = 0;
  let second = 0;
  let millisecond = 0;

  let cron;

  function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }

  function pause() {
    clearInterval(cron);
  }

  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
  }

  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
  }

  function returnData(input) {
    return input >= 10 ? input : `0${input}`
  }


  return (
    <>
      <h1>Timer App</h1>
      <form name="form_main">
        <div>
          <span id="hour">00</span>:<span id="minute">00</span>:<span id="second">00</span>
        </div>

        <button type="button" name="inicio" onClick={start}>Começar</button>
        <button type="button" name="parar" onClick={pause}>Parar</button>
        <button type="button" name="reiniciar" onClick={reset}>Reiniciar</button>
      </form>
    </>
  )
}

export default App
