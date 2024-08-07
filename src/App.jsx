import "./App.css";
import Countries from "./components/CountryLIst";
import LatestTotals from "./components/LatestTotals";

function App() {
  return (
    <main className="min-h-screen bg-black p-10">
      <section>
        <aside>
          <LatestTotals />
        </aside>
        <aside>
          <Countries />
        </aside>
      </section>
    </main>
  );
}

export default App;
