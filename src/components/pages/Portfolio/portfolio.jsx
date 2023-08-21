import { useState } from 'react';
// import Project from '../projects/projects'
import kryptKeeper from '../../../assets/images/kk-faves.jpg'
import Planner from '../../../assets/images/planner.jpg'
import Otr from '../../../assets/images/OTRsnap.jpg'
import Zelda from '../../../assets/images/zeldaq2.jpg'
import Note from '../../../assets/images/note-taker1.jpg'
import { removeHyphensAndCapitalize } from '../../../utils/helpers';


export default function Portfolio() {
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
        <div>
            <div className='flex-row'>
                {projects.map((project, idx) => (
                       <div className="project" key={idx}>
                       <img
                         src={project[project.name]}
                         alt={removeHyphensAndCapitalize(project.name)}
                         className="project-bg"
                       />
                       <div className="project-text">
                         <h3>
                           <a href={project.link}>{removeHyphensAndCapitalize(project.name)}</a>
                           &nbsp;
                           <a href={project.repo}>
                             <i className="fab fa-github" />
                           </a>
                         </h3>
                         <p>{project.description}</p>
                       </div>
                     </div>
                    
                ))}
            </div>
        </div>
    );
};
