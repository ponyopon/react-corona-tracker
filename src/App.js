import Results from "./components/Results";
import Selector from "./components/Selector";
import Title from "./components/Title";
import TopPages from "./pages/TopPages";


function App() {
  return (
    <div className="App">
      <TopPages />
      <Title />
      <Selector />
      <Results />

    </div>
  );
}

export default App;
