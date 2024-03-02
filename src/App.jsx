import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Start from './pages/Start/Start'
import { UserProvider } from './pages/context/context'
import Skills from './pages/Create/Skills'
import Personal from './pages/Create/Personal'
import Education from './pages/Create/Education'
import Experience from './pages/Create/Experience'
import SocialMedia from './pages/Create/SocialMedia'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Languages from './pages/Create/Languages'
import Projects from './pages/Create/Projects'
import Download from './pages/Create/Download'
function App() {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Start />} />
          <Route path={"/Personal"} element={<Personal />} />
          <Route path={"/Education"} element={<Education />} />
          <Route path={"/Experience"} element={<Experience />} />
          <Route path={"/Skills"} element={<Skills />} />
          <Route path={"/SocialMedia"} element={<SocialMedia />} />
          <Route path={"/Languages"} element={<Languages />} />
          <Route path={"/Projects"} element={<Projects />} />
          <Route path={"/Download"} element={<Download />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </UserProvider>
  )
}

export default App



