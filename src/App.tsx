import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className=" flex flex-col h-screen">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
