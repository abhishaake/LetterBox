import logo from './logo.svg';
import './App.css';
import SidebarMenu from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home"
import FeedView from './Components/FeedView/FeedView';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from './Components/Post/Post';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="Home" element={<Home />} />
            <Route path="/post/:id" element={<Post/>} />
            <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
