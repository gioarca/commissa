import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Webapp routes — da aggiungere */}
      {/* <Route path="/laboratori" element={<LabDirectory />} /> */}
      {/* <Route path="/laboratori/:id" element={<LabProfile />} /> */}
      {/* <Route path="/dashboard/brand" element={<BrandDashboard />} /> */}
      {/* <Route path="/dashboard/lab" element={<LabDashboard />} /> */}
      {/* <Route path="/richiesta/nuova" element={<NewRequest />} /> */}
    </Routes>
  )
}
