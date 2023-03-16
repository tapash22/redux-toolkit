import './App.css';
import CounterView from './features/counter/CounterView';
import PostView from './features/posts/PostView';

function App() {
  return (
    <div className="App">
      <CounterView />
      <div style={{marginTop:'50px'}}>
        <PostView />
      </div>
    </div>
  );
}

export default App;
