import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
  return (
    <div className="bg-gray-500 h-full min-h-screen w-full flex flex-col p-4">

      <>
      <Todos />
       <AddTodo />
      </>
    </div>
  );
}

export default App;
