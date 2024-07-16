import './App.css';
import image from './List.jpg';
import imageTwo from './note.jpg';
import { TodoList} from './TodoList';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={ image } alt='todolist' width='280px'/>
      </div>
      <div className='container'>
      <h1>TO DO LIST</h1>
      </div>
      <div className='container'>
      <img src={ imageTwo } alt='note' height="80px"width='90px'/>
      <TodoList/>
      </div>
    </div>
  );
}

export default App;