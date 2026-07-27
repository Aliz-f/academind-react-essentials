import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "../data.js";

function TabButton(props) {
  return (
    <button
      onClick={props.onSelect}
      className={props.isActive ? "active-tab" : "tab"}
    >
      {props.children}
    </button>
  );
}

function Tab(props) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 text-white
            bg-very-dark-blue p-6 rounded-xl shadow-3xl md:items-start"
    >
      <h3 className="text-xl font-semibold">{props.title}</h3>
      <p className="max-w-3xl text-base tracking-wide">{props.description}</p>
      <pre className="text-lg font-fira bg-dark-purple-2 p-4 rounded-lg w-full max-w-2xl overflow-x-auto">
        <code className="max-w-3xl">{props.code}</code>
      </pre>
    </div>
  );
}

function Tabs() {
  const [selectedTab, setSelectedTab] = useState("components");

  function handleSelect(selected) {
    setSelectedTab(selected);
  }

  return (
    <>
      <menu
        className="flex flex-col gap-6 items-center justify-center
            md:flex-row md:justify-start"
      >
        {CORE_CONCEPTS.map((item) => {
          return (
            <TabButton
              key={item.title}
              isActive={selectedTab === item.title.toLowerCase()}
              onSelect={() => handleSelect(`${item.title.toLowerCase()}`)}
            >
              {item.title}
            </TabButton>
          );
        })}
      </menu>
      <Tab {...EXAMPLES[selectedTab]} />
    </>
  );
}

export default Tabs;
