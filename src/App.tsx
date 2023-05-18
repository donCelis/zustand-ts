import "./App.css";
import { useStore } from "./store";

function App() {
  const bears = useStore.use.bears();
  const { increasePopulation, removeAllBears } = useStore.use.actions();

  const handleIncreasePopulation = () => {
    increasePopulation(1);
  };

  return (
    <div>
      <p>{bears}</p>
      <button onClick={handleIncreasePopulation}>+</button>
      <button onClick={removeAllBears}>Clear</button>
    </div>
  );
}

export default App;
