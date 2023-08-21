// import { useState } from 'react'
// import Header from './components/header'
// import About from './components/pages/about/about'
// import Projects from './components/pages/projects/projects'
// import Contact from './components/pages/contact/contact'
// import './App.css'


// export default function App() {
//   const [currentPage, setCurrentPage] = useState('About')

//   const renderPage = () => {
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Projects') {
//       return <Projects />;
//     } 
//     if (currentPage === 'Contact') {
//       return <Contact />;
//     }
//     <div className='App'>
//       <BootstrapComponent />
//     </div>
//   };
// const handlePageChange = (page) => setCurrentPage(page);


// return (
//   <>
//   <Header handlePageChange={handlePageChange}></Header> 
//     <main>
//       {renderPage()}
//     </main>
//     </>
// )}

import Header from "./components/pages/header/header";
import Nav from './components/pages/nav/nav';
import Footer from "./components/pages/footer/footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;