import logo from './logo.svg';
import './App.css';

function App({ number, onIncrease, onDecrease }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <div>{number}</div>
          <button onClick={onDecrease}>-</button>
          <button onClick={onIncrease}>+</button>
        </section>
        <p>
          I am counter!
        </p>
      </header>
    </div>
  );
}

export default App;
