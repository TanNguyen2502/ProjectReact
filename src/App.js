import Index from './Index/Index';
import MusicApp from './MusicApp/MusicApp';
import TodoClass from './ToDoListClass/TodoClass';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Index/>} />
          <Route path = "music_app" element = {<MusicApp/>} />
          <Route path = "todo_list" element = {<TodoClass/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;