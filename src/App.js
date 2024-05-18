import './App.css';
import List from './components/List';
import { countries } from './data/data';

function App() {
  return (
    <div className="App">
        <hi>Countries</hi> 
        <List countries={countries}/>
    </div>
  );
}

export default App;
