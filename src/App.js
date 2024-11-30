
import './App.css';
import PasswordGenerator from './PasswordGenerator';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-blue-200 via-black-200">
      <h1 className="text-3xl font-bold pt-16 text-blue-800">Password Generater</h1>

      <PasswordGenerator />

    </div>
  );
}

export default App;
