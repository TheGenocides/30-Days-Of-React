import { useState } from 'react';
import borderContext from './Context/borderContext'
import DEFAULT_VALUE from "./utils/Constant"
import Box from './Components/Box';
import Button from './Components/Button';
import Card from './Components/Card';
import './App.css';

function App() {
  const [border, setBorder] = useState(DEFAULT_VALUE)
  return (
    <>
      <Card />
      
    </>
    // <borderContext.Provider value={border}>
    //   <div>
    //     <header className="content">
    //       <h1>Hello World</h1>
    //     </header>
    //   </div>
    //   <br />
    //   <hr />
    //   <br />

    //   <Box text="Box Number one"></Box>
    //   <Box text="Box Number two"></Box>
    //   <Box text="Box Number three"></Box>

    //   <br />
    //   <br />
    //   <center>
    //     <Button onClick = {
    //       () => {
    //         setBorder(border < 5 ? border + 1:border - 1)
    //         console.log(border)
    //       }
    //     } />
    //   </center>
    // </borderContext.Provider>
  );
}


export default App;
