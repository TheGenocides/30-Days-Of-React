import { useContext } from "react";
import borderContext from "../Context/borderContext";
  
function Box(props){
    const border = useContext(borderContext);
    return <div className={'border-' + border.toString()}>
        {props.text}
        </div>
}

  

export default Box;