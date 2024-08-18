import getRandomColor from "../utils/getRandomColor";


function ColoredBox(){
    const color = getRandomColor()
    return <li style={
        {
            backgroundColor: getRandomColor(),
            color: "white",
            display: "flex",
            justifyContent: "center",
            margin: "1px",
            alignItems: "center",
            borderRadius: "3px",
            width: "6em",
            height: "6em"
        }
    }>
        {color}
    </li>
}

function ColoredBoxes({row, column, howMany}) {
    const boxes = []
    const howManyBoxes = row * column > howMany ? howMany:row*column
    
    for (let i = 0; i < howManyBoxes; i++) {
        boxes.push(
            <ColoredBox />
        )
    }
    
    return <ul style={
        {
            alignContent: "flex-start",
            listStyle: "none",
            padding: "none",
            display: "flex",
            flexWrap: "wrap", // (row/column * 0.15) because we add the extra 1px margin 
            width: `${row * 6 + (row * 0.15)}em`,
            height: `${column * 6 + (column * 0.15)}em`,
        }
    }>
        {boxes}
    </ul>
}

export {ColoredBox, ColoredBoxes};