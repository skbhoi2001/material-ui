import { Exampleone } from "./Component/Exampleone";
import { Exampletwo } from "./Component/Exampletwo";
import { Theme } from "./Component/Theme";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
     <Exampleone/>
     <Exampletwo/>
     {/* <Theme/> */}
    </div>
  );
}
