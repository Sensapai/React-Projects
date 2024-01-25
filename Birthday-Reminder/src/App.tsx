import React, { useState } from "react";
import List from "./components/List";
import data from "./data/data";

function App() {
    const [people, setPeople] = useState(data)
    
    const clickHandler = () => {
        if (people.length === 0) {
            setPeople(data)
        } else {
            setPeople([])
        }
    }

    return (
        <main>
            <h2>{people.length} Birthdays today</h2>
            <section className="container">
                <List people={people}/>
            </section>
            <button onClick={() => clickHandler()}>
                    {people.length === 0 ? "Reload list" : "Clear All"}
            </button>
        </main>
    );
}

export default App;
