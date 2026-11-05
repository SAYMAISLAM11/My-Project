
import './App.css'
function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Student />
    </>
  )
}
function Student() {
  const name="Sayma"
  const age = 20;
  return (
    <div className="student">
    <p>i am a Student and my name is {name}. Myold is {age}</p>
    <p>Dept:</p>
    </div>
  )
}

export default App
  