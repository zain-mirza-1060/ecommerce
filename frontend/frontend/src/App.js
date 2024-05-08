import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Upload from "./components/Upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={<Upload/>} />

      </Routes>
    </Router>
  );
}

export default App;
