import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Chats } from "./components/Chats";
import { Join } from "./components/Join";



function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' exact component={Chats} />
      </Router>


    </div>
  );
}

export default App;
