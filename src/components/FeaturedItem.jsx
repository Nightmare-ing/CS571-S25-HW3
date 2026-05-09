import { useState } from "react";

export default function FeaturedItem(props) {
    const [flip, setFlip] = useState(false);

    const clickToFlip = () => {
        setFlip(!flip);
    };

    return (
        <div>
            <img src={props.img} alt={props.name} />
            <h2>{props.name}</h2>
            <p>${props.price} per unit</p>
            <p>{props.description}</p>
            <button onClick={clickToFlip}>
                {flip ? "Hide Nutrition Facts" : "Show Nutrition Facts"}
            </button>
        </div>
    );
}
