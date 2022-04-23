import './App.css';
import Timer from '../Timer/Timer'
import Header from '../Header/Header'

function App() {
  return (
    <div>
      <Header />
      <div className='app-container'>
        <Timer />
      </div>
    </div>
  )
}
export default App;
