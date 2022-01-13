import { Component } from "react"
import { Routes, Route } from "react-router-dom";
//components
import Home from "./components/Home/Home"
import Projects from "./components/Projects/Projects"
import Header from "./components/Navbar/Header"
import SignIn from "./components/Auth/SignIn"
import SignUp from "./components/Auth/SignUp"
import Mapbox from "./components/Mapbox/Mapbox";
//styles
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  render() {
    return (
      < div className="d-flex flex-column h-100">
        <Header />
        <div className="" style={{ flexGrow: 1 }}>
          <Routes>
            <Route exact path="/" element={<Mapbox />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>

      </div>
    )
  }
}
