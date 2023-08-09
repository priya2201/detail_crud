import {Routes,Route} from 'react-router-dom'
import './App.css';
import Layout from './components/shared/Layout';
import AllFruits from './pages/AllFruits';
import AddFruit from './pages/AddFruit'
import UpdateFruit from './pages/updateFruit';
import HalfUpdate from './pages/HalfUpdate';

function App() {
  return (
    <div className="App">
<Layout>
  <Routes>
    <Route path="/" element={<AllFruits/>}></Route>
    <Route path="/add-fruit" element={<AddFruit/>}></Route>
<Route path="/update-fruit/:id" element={<UpdateFruit/>}></Route>
<Route path="/half-update/:id" element={<HalfUpdate/>}></Route>

    </Routes>

    </Layout>    </div>
  );
}

export default App;
