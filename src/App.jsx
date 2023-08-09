import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import data from "./data";

function App() {
  const dataCard = data.map((item) => <Card key={item.id} item={item} />);
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{dataCard}</section>
    </>
  );
}

export default App;
