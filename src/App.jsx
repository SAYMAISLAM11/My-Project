
import './App.css'
function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Student />
      <Student />
      <Student />
      <Developer name="sayma" language="Python"></Developer>
      <Developer name="sadia" language="JavaScript"></Developer>
      <Devices name="sayma" device="Laptop"></Devices>
      <Devices></Devices>
      <Player name="sharmin" age="30"></Player>
      <Player name="Nipon" age="25"></Player>

    </>
  )
}
function Player({name, age}) {
  return (
    <div className="student">
      <h2>Name:{name}</h2>
      <p>Age:{age}</p>
    </div>
  )
}
// const {name, age}={name:"Sharmin", age: 20}
function Devices(props) {
  return (
    <div style={{
      backgroundColor: 'lightblue',
      border: '2px solid blue',
    }}>
      <h2>Person name:{props.name} Device: {props.device}</h2>
      <h2>Person name: {props.name} Device: {props.device}</h2>
    </div>
  )
}
function Developer(props) {
  console.log(props)
  return (
    <div style={{
      border: '2px solid red',
      padding: '10px',
      borderRadius: '10px',
      marginBottom: '10px',
    }}>
      <h2>Developer name: {props.name}</h2>
      <p>language: {props.language}</p>
    </div>
  )
}
function Student() {
  const name="Sayma"
  const age = 20;
  const styleform={
    color: 'black',
    border: '2px solid green',
  }
  return (
    <div className="student">
    <p style={styleform}>i am a Student and my name is {name}. Myold is {age}</p>
    <p>Dept:</p>
    </div>
  )
}

export default App
  