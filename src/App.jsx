import {useState} from 'react'
import Header from './components/Header.jsx'
import Concepts from './components/Concepts.jsx'
import Tabs from './components/Tabs.jsx'

function App() {
    return (
        <main className="max-w-7xl mx-auto">
            <section className="mb-20">
                <Header/>
            </section>
            <section className="bg-black p-6 rounded-2xl mb-20 md:p-10">
                <h2 className="text-3xl text-purple-300 font-bold text-center pb-10">
                    Core Concepts
                </h2>
                <Concepts/>
            </section>
            <section className="mb-20">
                <h2 className="text-3xl text-purple-300 font-bold text-center pb-10 md:text-left">
                    Examples
                </h2>
                <Tabs/>
            </section>
        </main>
    )
}

export default App
