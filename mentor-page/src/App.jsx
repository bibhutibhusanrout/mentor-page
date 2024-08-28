import './App.css'
import Mentorprofile from './Mentor-page/Mentor-page'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/mentor' element={<Mentorprofile/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
