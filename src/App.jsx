import { useState } from 'react';
import { elapsedTimeParser } from './util/elapsed-time-parser';

function App() {
  const [time, setTime] = useState('');
  const [output, setOutput] = useState('');

  const submit = (e) => {
    e.preventDefault();
    setOutput(elapsedTimeParser(time));
    setTime('');
  };

  return (
    <>
      <h1>Elapsed Time Parser</h1>
      <form onSubmit={submit}>
        <fieldset>
          <label htmlFor="time-input">Enter Time</label>
          <input type="text" id="time-input" value={time} onChange={({ target }) => setTime(target.value)} />
        </fieldset>
        <button>Convert</button>
      </form>
      {output && <div>{output}</div>}
    </>
  );
}

export default App;
