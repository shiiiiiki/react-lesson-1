import './App.css';
import Alert from "./components/Alert";

function App() {
  return (
      <div>
        <Alert type="warning" text="what is love?" />
          <Alert type="light" text="love love" />
          <Alert type="dark" text="text text text" />
      </div>
  );
}

export default App;
