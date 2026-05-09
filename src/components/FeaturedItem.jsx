export default function FeaturedItem(props) {
    return (
        <div>
            <img src={props.img} alt={props.name} />
            <h2>{props.name}</h2>
            <p>${props.price} per unit</p>
            <p>{props.description}</p>
        </div>
    );
}
