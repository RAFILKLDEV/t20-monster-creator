import Ataques from "../../components/Ataques/Ataques";
import Atributos from "../../components/Atributo/Atributo";
import Desc from "../../components/Desc/Desc";
import Estatisticas from "../../components/Estatisticas/Estatisticas";
import { Nd } from "../../components/Nd/Nd";
import Pericias from "../../components/Pericias/pericias";
import "./App.css";

function App() {
  return (
    <div className="site">
      <div className="App">
        <div className="monsterCreator">
          <div className="card">
            <Nd></Nd>
            <Atributos></Atributos>
            <Estatisticas></Estatisticas>
            <Ataques></Ataques>
            <Desc label="Habilidades" placeholder="Insira a Habilidade ..." />
            <Pericias></Pericias>
            <Desc label="Equipamentos" placeholder="Insira o Equipamento ..." />
            <Desc label="Tesouro" placeholder="Insira o Tesouro ..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
