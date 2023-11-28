import React from "react";
import "./Components/MyFormComponent.tsx";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


export default App;