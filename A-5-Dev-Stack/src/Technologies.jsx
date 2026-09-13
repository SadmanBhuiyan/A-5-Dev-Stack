import { use } from 'react'
import TechnologyCard from './TechnologyCard.jsx'

const technologiesPromise = fetch('/technologies.json')
    .then(response => response.json())

const Technologies = () => {
    const technologies = use(technologiesPromise)

    return (
        <div className="technologySection" id="technologies">
            <div className="technologyHeading">
                <h2>Explore Technologies</h2>
                <p>Choose the technologies that fit your development stack.</p>
            </div>

            <div className="technologyLayout">
                <div className="technologyGrid">
                    {technologies.map(technology => (
                        <TechnologyCard
                            key={technology.id}
                            technology={technology}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Technologies