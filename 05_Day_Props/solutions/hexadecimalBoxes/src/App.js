import { ColoredBoxes } from './components/ColoredBoxes';
import './App.css';

export default function App() {
  return (<>
  <br />
  <h1>30 Days of Reacts</h1>
  <br />
  <h2>Hexadecimal Colors</h2>
  <br />
  <br />
  <ColoredBoxes row={8} column={4} howMany={100}></ColoredBoxes>
  </>
  );
}