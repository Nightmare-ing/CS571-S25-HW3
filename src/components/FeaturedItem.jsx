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
            {flip ?
                <table>
                    <thead>
                        <tr>
                            <th>Calories</th>
                            <th>Fat</th>
                            <th>Carbohydrates</th>
                            <th>Protein</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{props.nutrition.calories ?? "0g"}</td>
                            <td>{props.nutrition.fat ?? "0g"}</td>
                            <td>{props.nutrition.carbohydrates ?? "0g"}</td>
                            <td>{props.nutrition.protein ?? "0g"}</td>
                        </tr>
                    </tbody>
                </table>
            :   <div></div>}
            <button onClick={clickToFlip}>
                {flip ? "Hide Nutrition Facts" : "Show Nutrition Facts"}
            </button>
        </div>
    );
}
