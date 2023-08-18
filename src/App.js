import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
<div >
    <h1>This is my input</h1>
    <input 
    name='name'
    type='text'
    placeholder='Write something ...'
    />
    <button>Go</button>

    <h1>This is my second input</h1>
    <input 
    name='name'
    type='text'
    placeholder='Write something...'
    />
    <button>Go</button>

    <h1>This is my third input</h1>
    <input 
    name='name'
    type='text'
    placeholder='Write something...'
    />
    <button>Go</button>
    </div>
    </div>
    
  );
}

export default App;
