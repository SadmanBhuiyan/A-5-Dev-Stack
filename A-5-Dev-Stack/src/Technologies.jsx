import { use, useState } from 'react'
import { toast } from 'react-toastify'
import TechnologyCard from './TechnologyCard.jsx'
import YourStack from './YourStack.jsx'

const technologiesPromise = fetch('/technologies.json')
    .then(response => response.json())

const Technologies = () => {
    const technologies = use(technologiesPromise)
    const [stack, setStack] = useState([])

    const addToStack = (technology) => {
        const alreadyAdded = stack.some(item => item.id === technology.id)

        if (alreadyAdded) {
            toast.warning("This technology is already in your stack.")
            return
        }

        setStack([...stack, technology])
        toast.success(`${technology.name} added to your stack.`)
    }

    const removeFromStack = (id) => {
        const removedTechnology = stack.find(item => item.id === id)

        setStack(stack.filter(item => item.id !== id))

        toast.info(`${removedTechnology.name} removed from your stack.`)
    }

    const removeAll = () => {
        setStack([])
        toast.info("All technologies removed from your stack.")
    }

    return (
        <div className="technologySection" id="technologies">
            <div className="technologyHeading">
                <h2>Explore the <span className='gradientText'>Technologies</span></h2>
                <p>Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="technologyLayout">
                <div className="technologyGrid">
                    {technologies.map(technology => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                            onAdd={addToStack}
                            added={stack.some(item => item.id === technology.id)}
                        />
                    ))}
                </div>

                <YourStack
                    stack={stack}
                    onRemove={removeFromStack}
                    onRemoveAll={removeAll}
                />
            </div>
        </div>
    )
}

export default Technologies