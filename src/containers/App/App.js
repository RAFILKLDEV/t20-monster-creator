import Ataques from '../../components/Ataques/Ataques';
import Estatisticas from '../../components/Estatisticas/Estatisticas';
import { Nd } from '../../components/Nd/Nd';
import './App.css';

function App() {

  return (
    <div className='site'>
      <div className="App">
        <div className='monsterCreator'>
          <div className='card'>
            <Nd></Nd>
            <Estatisticas></Estatisticas>
            <Ataques></Ataques>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
