const Fighter = (props) => {
    return (
        <li key={props.fighter.index}>
            <img src={props.fighter.img} alt={props.fighter.name} />
            <p>{props.fighter.name}</p>
            <p>Price: <span>{props.fighter.price}</span></p>
            <p>Strength: <span>{props.fighter.strength}</span></p>
            <p>Agility: <span>{props.fighter.agility}</span></p>
            <div>
                {props.action === 'add' 
                    ? <button type="button" onClick={() => props.handleAddFighter(props.fighter)}>Add</button>
                    : <button type="button" onClick={() => props.handleAddFighter(props.fighter)}>Remove</button>
                }
            </div>
        </li>
    )
};

export default Fighter;