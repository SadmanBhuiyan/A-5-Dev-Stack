const TechnologyCard = ({ technology, onAdd, added }) => {
    return (
        <div className="technologyCard">
            <div className="technologyTop">
                <img src={technology.icon} alt={technology.name} />

                <span className="technologyBadge">
                    {technology.badge}
                </span>
            </div>

            <h3>{technology.name}</h3>

            <p>{technology.description}</p>

            <div className="technologyInfo">
                <span>{technology.category}</span>
                <span>{technology.difficulty}</span>
            </div>

            <div className="technologyBottom">
                <p>★ {technology.rating}</p>

                <button
                    className={added ? "addedBtn" : "addBtn"}
                    onClick={() => onAdd(technology)}
                >
                    {added ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;