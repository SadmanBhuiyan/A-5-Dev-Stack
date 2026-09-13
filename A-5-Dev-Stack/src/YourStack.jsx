const YourStack = ({ stack, onRemove, onRemoveAll }) => {
    return (
        <div className="yourStack">
            <div className="stackHeading">
                <div>
                    <h2>Your Stack</h2>
                    <p>{stack.length} selected</p>
                </div>
            </div>

            {stack.length === 0 ? (
                <div className="emptyStack">
                    <p>No technologies selected yet.</p>
                    <p>Your stack is empty.</p>
                </div>
            ) : (
                <div className="stackList">
                    {stack.map(technology => (
                        <div className="stackItem" key={technology.id}>
                            <img src={technology.icon} alt={technology.name} />

                            <div>
                                <h4>{technology.name}</h4>
                                <p>{technology.category}</p>
                            </div>

                            <button onClick={() => onRemove(technology.id)}>
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {stack.length > 0 && (
                    <button onClick={onRemoveAll} className="removeBtn">Remove All</button>
                )}

        </div>
    )
}

export default YourStack