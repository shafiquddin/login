
import Login from "./Login"

const isRegister=false;

function App() {
    return (<div className="container">
       <Login isRegister={isRegister}/>
       </div>)
}

export default App;