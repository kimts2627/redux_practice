import logo from './logo.svg';
import './App.css';
import PostListContainer from './containers/PostListContainer';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterContainer />
        <p>
          I am counter!
        </p>
      </header>
      <PostListContainer />
    </div>
  );
}

export default App;
