import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
import Dropdown from './components/Dropdown';

// Accordion items
const items = [
  {
    title: 'What is Angular',
    content: `Angular is an application design framework and development
      platform for creating efficient and sophisticated single-page apps`,
  },
  {
    title: 'Setting up the local environment and workspace',
    content: `This guide explains how to set up your environment for Angular
      development using the Angular CLI tool. It includes information about
      prerequisites, installing the CLI, creating an initial workspace and
      starter app, and running that app locally to verify your setup.`,
  },
  {
    title: 'Install the Angular CLI',
    content: `You use the Angular CLI to create projects, generate application
      and library code, and perform a variety of ongoing development tasks
      such as testing, bundling, and deployment.`,
  },
];

// Dropdown options
const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'The Color Blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;
