import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Cadastrar } from "./pages/cadastrar";
import { Feed } from "./pages/feed";
import { Home } from "./pages/home";
import { Login } from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default App;
