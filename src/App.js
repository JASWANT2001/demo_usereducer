import { useReducer } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Home';
import Features from './Features';
import Pricing from './Pricing';

function reducer(state, action) {
  switch (action.screen) {
    case "HOME":
      return { screen: "HOME" }
    case "FEATURES":
      return { screen: "FEATURES" }
    case "PRICING":
      return { screen: "PRICING" }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    screen: "HOME"
  })

  return (
    <>
      {
        state.screen === "HOME" && <Home dispatch={dispatch}></Home>
      }
      {
        state.screen === "FEATURES" && <Features dispatch={dispatch}></Features>
      }
      {
        state.screen === "PRICING" && <Pricing dispatch={dispatch}></Pricing>
      }
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
