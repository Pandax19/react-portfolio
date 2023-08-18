import kryptKeeper from '../assets/images/kk-faves.jpg'
import Otr from '../assets/images/OTRsnap.jpg'
import Planner from '../assets/images/planner.jpg'
import Zelda from '../assets/images/zeldaq2.jpg'
import Note from '../assets/images/note-taker1.jpg'

export default function Projects() {
    const projects = [
        {
            name: `Krypt Keeper`,
            description: `Find haunted events near you using Zip Code`,
            deployment: `https://github.com/Pandax19/krypt-keeper`,
            img: kryptKeeper,
            repo: `https://github.com/Pandax19/krypt-keeper`
        },
        {
            name:`On the Rocks`,
            description: `application that allows you to look up certain alcoholic drinks and gives you the ingredients with a matching picture`,
            deployment: `https://blickenderfer.github.io/ontherocks/`,
            img: Otr,
            repo:`https://github.com/blickenderfer/ontherocks`
        },
        {
            name: `Daily Planner`,
            description: `Work day scheduling planner that lets you add and delete things from a to-do list`,
            deployment: `https://pandax19.github.io/daily-planner/`,
            img: Planner,
            repo:`https://github.com/Pandax19/daily-planner`
        },
        {
            name: `Zelda Quiz`,
            description: `A quiz to test someones knowledge of the legend of zelda that gives and keeps score`,
            deployment: `https://pandax19.github.io/Zelda-Quiz/`,
            img: Zelda,
            repo: `https://github.com/Pandax19/Zelda-Quiz`
        },
        {
            name: `Note Taker`,
            description: `App created to keep notes using express.js`,
            deployment: `https://your-favorite-note-taker.herokuapp.com/`,
            img: Note,
            repo: `https://github.com/Pandax19/note-taker`
        },
    ]


return (

 <>
    <h1>Projects Page</h1>
    <div className='card' >
        {projects.map((project, i) = (
            <section id={'proj'+i} className='add-margin card my-card' key={i}>
                <div className='card-image'>
                    <figure className='proj-image'>
                        <img src={project.img} alt='PLaceholder image' className='rando'/>
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='media-content'>
                        <p className="title">{project.name}</p>
                        </div>
                </div>
                <div className='content'>
                    {project.description}
                    <br />
                    <a href={project.repo}>GitHub Repo</a> <a href={project.deployment}>Deployed Page</a>
                    <br />
                    </div>
                    </section>
            ))}
        </div>
    </>
    )

}