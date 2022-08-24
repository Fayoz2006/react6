import "./CSS/production/App.css";
import Register from "./Components/Register/Register";
import Layout from "./Layout/Jayout";
import Exchange from "./Components/Exchange/Exchange";

function App() {
  return (
    <div className="App">
      <Layout></Layout>
      <main>
        <Exchange />
      </main>
    </div>
  );
}

export default App;
