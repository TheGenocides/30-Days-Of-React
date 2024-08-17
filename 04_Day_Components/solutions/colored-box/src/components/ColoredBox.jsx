import getRandomColor from "../utils/getRandomColor"
import { COLORED_BOX_STYLE } from "../utils/constants";

export default function ColoredBox() {
    const hexaColor = getRandomColor();
    return <div className="colored-box" style={{
            "background-color": hexaColor,
            ...COLORED_BOX_STYLE
        }}>
        {hexaColor}
    </div>
}