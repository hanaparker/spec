import React, { useState } from "react";
import "./App.css";
import AddSourcesForm from "./components/AddSourcesForm";
import SourceList from "./components/SourceList";
import RunawayImage from "./components/RunawayImage";


function App() {
  const [sources, setSources] = useState([]);

  function handleAdd(item) {
    const newSource = {
      id: Math.random(),
      name: item.name,
      email: item.email,
    };
    setSources((prev) => [newSource, ...prev]);
  }

  function handleDelete(id) {
    setSources((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="App">
      <RunawayImage /> {}
      <header className="App-header">
        <h1>Spectator Sources</h1>
        <AddSourcesForm onAdd={handleAdd} />

        <section className="sources-list">
          <h2>Sources</h2>
          <SourceList items={sources} onRemove={handleDelete} />
        </section>
      </header>
    </div>
  );
}


export default App;