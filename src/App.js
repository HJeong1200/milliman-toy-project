import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Titlebar from "./components/Titlebar";

function App() {
  return (
    <>
      <Titlebar />
      <div className="contents">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
