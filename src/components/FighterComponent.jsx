const Fighter = (props) => {
    return (
        <li key={props.fighter.index}>
            <img src={`${props.fighter.img}?text=${props.fighter.name}`} alt={props.fighter.name} />
            <p>{props.fighter.name}</p>
            <p>Price: <span>{props.fighter.price}</span></p>
            <p>Strength: <span>{props.fighter.strength}</span></p>
            <p>Agility: <span>{props.fighter.agility}</span></p>
            <div>
                <button type="button" onClick={() => props.handler(props.fighter)}>{props.action}</button>
            </div>
        </li>
    )
};

export default Fighter;