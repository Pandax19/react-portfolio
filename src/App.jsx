
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