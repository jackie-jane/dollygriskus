import { version, Component } from 'inferno';
import Layout from './components/shared/Layout/layout'
import './App.css';
import { initDevTools } from 'inferno-devtools';

initDevTools();

class App extends Component {
  render() {
    return (
      <Layout />
    );
  }
}

export default App;


      // <div className="App">
      //   <header className="App-header">
      //     <Logo width="80" height="80" />
      //     <p>{`Welcome to Inferno ${version}`}</p>
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //   </header>
      // </div>