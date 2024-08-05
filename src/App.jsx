import { createRoot } from "react-dom"
import Pet from "./Pet";


const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Ritz" animal="cat" breed="Orange" />
    <Pet name="Ruby" animal="cat" breed="Mixed" />
    <Pet name="Tank" animal="dog" breed="French Bulldog" />
  </div>
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
