import PaginatedSorryLetter from './components/PaginatedSorryLetter'
import './App.css'

function App() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #0f1419, #1e3a2e, #2c5530, #1a2332)', 
      backgroundSize: '400% 400%',
      animation: 'gradientShift 12s ease infinite',
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '10px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <PaginatedSorryLetter />
    </div>
  )
}

export default App
