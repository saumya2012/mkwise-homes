import CoundownTimer from './CoundownTimer';
import './App.css';

function App() {

  return (
    <>
      <h1 className="heading">MKWise Homes</h1>
      <p className="description">Your Future Home is Coming Soon</p>
      <div className="modal">
        <main>
          <CoundownTimer />
        </main>
      </div>
    </>
  )
}

export default App
