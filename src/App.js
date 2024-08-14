import "./App.css";
import CityCard from "./components/cityCard";
import CitySelector from "./components/citySelector";

function App() {
  return (
    <>
      <div className="card">
        <CityCard />
        <CitySelector />
      </div>
    </>
  );
}

export default App;
