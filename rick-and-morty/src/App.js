import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Character from './components/Character';
import Counter from './components/Counter';
import RickAndMortyCharacters from './components/RickAndMortyCharacters';
import Paginator from './components/paginator';

function App() {
  return (
    <div className="container">
      {/* <div>Hola, mundo</div>
      <Character></Character>
      <Character></Character> */}
      {/* <Counter /> */}
      <RickAndMortyCharacters />
      <Paginator />
    </div>
  );
}

export default App;