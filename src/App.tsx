import React from "react";
import logo from "./logo.svg";
import Page from "./Page";
import "./App.css";
import PageData from "./interface/PageData";

function App() {
  const testData: PageData = {
    header: "성호",
    subHeader: "개인 링크 페이지",
    description: "설명을 입력할 수 있습니다.",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Page data={testData} />
      </header>
    </div>
  );
}

export default App;
