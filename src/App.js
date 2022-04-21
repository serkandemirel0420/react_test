import './App.css';
import Parent from './Component/Parent';
import Children from './Component/Children';
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Parent>  </Parent>
            </header>
        </div>
    );
}

export default App;
