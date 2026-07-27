import Section from "./components/Section.jsx";
import Header from "./components/Header.jsx";
import Concepts from "./components/Concepts.jsx";
import Tabs from "./components/Tabs.jsx";

function App() {
  return (
    <main className="max-w-7xl mx-auto">
      <Section className="mb-20">
        <Header />
      </Section>

      <Section
        title="Core Concepts"
        titleProps={{
          className: "text-3xl text-purple-300 font-bold text-center pb-10",
        }}
        className="bg-black p-6 rounded-2xl mb-20 md:p-10"
      >
        <Concepts />
      </Section>

      <Section
        title="Examples"
        titleContainer="h2"
        titleProps={{
          className:
            "text-3xl text-purple-300 font-bold text-center pb-10 md:text-left",
        }}
        className="mb-20"
      >
        <Tabs />
      </Section>
    </main>
  );
}

export default App;
