import AppRouter from "components/Router";

function App() {
  const[typeObj, setTypeObj] = useState(null);

  return (
    <AppRouter typeObj={typeObj} />
  );
}

export default App;
