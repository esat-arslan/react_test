import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './greetings.jsx'
import {cube, foo, graph, FooDisplay} from './cube.jsx'
import TodoList from './list.jsx'
import Bio from './Bio.jsx'
import { PackingList} from './lists.jsx'
graph.options={
  color:"blue",
  thickness:"4px",    };
  graph.draw();
  console.log(cube(3));
  console.log(foo);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Greeting /> */}
    {/*<FooDisplay />*/}
    {/*<TodoList />*/}
    {/*<Bio />/**/}
    <PackingList />
  </StrictMode>,
)
