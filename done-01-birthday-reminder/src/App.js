import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>0 Birthdays today</h3>
        <List dickCheese={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
