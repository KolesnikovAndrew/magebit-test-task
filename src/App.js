import "./App.css";
import Main from "./Components/Main/Main";
import TopBar from "./Components/TopBarComponent/TopBar";
import { useState } from "react";

function App() {
  const [validationSuccess, setValidationSuccess] = useState(false);

  return (
    <div className="App">
      <div className="content">
        <div>
          <TopBar className="topBar" />

          <Main
            validationSuccess={validationSuccess}
            setValidationSuccess={setValidationSuccess}
          />
        </div>

        <div className="backgroundImageContainer"></div>
      </div>
    </div>
  );
}

export default App;
