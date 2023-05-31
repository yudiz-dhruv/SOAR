import './App.css'
import { Routes, Route } from 'react-router-dom'
import AllDashboard from './Components/AllDashboard'
import VulnerabilityDashboard from './Components/Vulnerability'
import PatchDashboard from './Components/Patch'
import AuditDashboard from './Components/Audit'
// import Layout from './Shared/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<AllDashboard />} />
        <Route path='/vulnerability' element={<VulnerabilityDashboard />} />
        <Route path='/patch' element={<PatchDashboard />} />
        <Route path='/audit' element={<AuditDashboard />} />
      </Routes>
    </>
  )
}

export default App
