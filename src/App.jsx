import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="center">
            <h1>React Pics</h1>
            <p>
                Say more with a picture.Explore the internet’s most expressive
                reaction pics, perfectly tagged and easy to share.
            </p>
            <SearchBar />
        </div>
    );
}

export default App;
