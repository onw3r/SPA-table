
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Table from './Pages/Table';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path='/page/:number' element={<Table/>}/>
      </Routes>

    </div>
  );
}

export default App;
