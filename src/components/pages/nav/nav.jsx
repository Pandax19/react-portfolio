
// import React from 'react';
// import './nav.css';

// export default function Nav() {
//   return (
//     <header>
//         <nav className='navBar' role='navigation' aria-label='main nav'>
//             <div className='navBar-brand'>
//                 <a className='navBar-item' href='' ></a>

//                 <button type="button" class="btn btn-primary"
//                 >Home</button>
//                 <button type="button" class="btn">About</button>
//                 <button type="button" class="btn">Projects</button>
//                 <button type="button" class="btn">Contact</button>
//             </div>
//         </nav>

   
//     {/* <Nav className="navbar">
//       <ul className="nav-list">
//         <li className="nav-item"><a href="/">Home</a></li>
//         <li className="nav-item"><a href="/about">About</a></li>
//         <li className="nav-item"><a href="/services">Projects</a></li>
//         <li className="nav-item"><a href="/contact">Contact</a></li>
//       </ul>
//     </Nav> */}
// </header>
//   ); 
// };

import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../utils/helpers';

function Nav({ currentPage }) {
  const pages = ['projects', 'contact', 'resume'];

  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;