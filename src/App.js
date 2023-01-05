import { CookTemp } from "./CookTemp";

function App() {
  function renderCookTemp() {
    console.log("i've been clicked");
    return (
      <div>
        <h1>CookTemp</h1>
      </div>
    );
  }
  return (
    <div className="app">
      <h1>Food conversion app</h1>
      <button>Conversion</button>
      <button onClick={renderCookTemp}>Cook temp</button>
    </div>
  );
}

export default App;
