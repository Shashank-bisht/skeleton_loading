
import './App.css'
import Articles from './components/Articles'
import User from './components/User'
function App() {
  

  return (
    <>
 <header>
  <h1>React Skeletons</h1>
 </header>
 <div className='content'>
  <Articles/>
  <User/>
 </div>
    </>
  )
}

export default App
