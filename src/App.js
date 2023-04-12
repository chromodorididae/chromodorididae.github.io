// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';



//adding FontAwesome
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserRobot, faGitHubAlt } from "@fortawesome/free-solid-svg-icons";

// library.add(faUserRobot, faGitHubAlt);


// import Navbar from './components/Navbar'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Header />
      {/* <i class="bi bi-person-circle"></i> */}
      
      {/* <header className="App-header">
       <h1>App Header</h1>
      </header> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/" element={<Experience />} />;
          <Route path="/" element={<Projects />} />;
          {/* add other routes */}
          {/* <Route path="/" element={<Home />} />; */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
