
import './App.css';

import Contact from './components/contacts/Contact.js';
import Navbar from './components/navbar/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Contacts from './components/contacts/Contacts';
import {Provider} from './components/context';



function App() {
  // let myname="Anasse demnati"
  // let num1 = 22
  // let num2 = 20 
  return (
    <Provider>
          <div className="App">
      <Navbar title="Contact Client"/>
      <Contacts />      
    </div>

    </Provider>

  );
}

export default App;
