import { Route, Switch } from 'react-router-dom';
import App from './App';
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';

export default(
    <Switch>
        <Route exact path='/' component= {PokemonList} />
        <Route path='/pokemon/:name' component = {Pokemon} />
    </Switch>
)