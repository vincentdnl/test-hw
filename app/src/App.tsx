import "./App.css"
import {Jobs} from "./components/Jobs"

function App() {
    return (
        <main className={"container mx-auto px-4 py-8 text-slate-900"}>
            <h1 className={"text-4xl mb-12"}>
                <span>Find the best jobs near </span>
                <span className={"font-bold text-indigo-600"}>Bordeaux</span>
                <span>!</span>
            </h1>
            <Jobs/>
        </main>
    )
}

export default App
