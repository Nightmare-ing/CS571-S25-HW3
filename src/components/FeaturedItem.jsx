import { useState } from "react";
import { Card, Button, Table } from "react-bootstrap";

export default function FeaturedItem(props) {
    const [flip, setFlip] = useState(false);

    const clickToFlip = () => {
        setFlip(!flip);
    };

    return (
        <Card style={{ width: "25rem", padding: "2rem" }}>
            <img src={props.img} alt={props.name} />
            <h1>{props.name}</h1>
            <h5>${props.price} per unit</h5>
            <p>{props.description}</p>
            <h5>Nutrition Facts</h5>
            {flip ?
                <Table>
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
                </Table>
            :   <div></div>}
            <Button
                onClick={clickToFlip}
                variant={flip ? "secondary" : "primary"}
            >
                {flip ? "Hide Nutrition Facts" : "Show Nutrition Facts"}
            </Button>
        </Card>
    );
}
