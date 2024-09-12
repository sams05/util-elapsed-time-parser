import { useState } from 'react';

function App() {
  const [time, setTime] = useState('');

  const submit = (e) => {
    e.preventDefault();

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
    </>
  );
}

export default App;
