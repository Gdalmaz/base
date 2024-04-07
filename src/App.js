import Menu from "./components/Menu";
import { Routes,Route,Link,NavLink, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactDOM from 'react-dom/client';
import Addform from "./pages/Addform";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import History from "./pages/History";

function App() {
  return (<div>
    
    <Routes>
      <Route path="/" element={<Navbar />} />  {/* Update path to "/" */}
      <Route path="/addform" element={<Addform />} />  {/* Add route for "/addform" */}    
    </Routes>
      <Routes>
      <Route path="/" element={<Menu/>}/>
      <Route path="/home" Component={Home} />
      <Route path="/profile" Component={Profile} />
    </Routes>

  </div>
  );
}

export default App;
