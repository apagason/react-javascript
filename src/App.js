import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Fibonacci from './pages/Fibonacci';
import Strings from './pages/Strings';
import PrimeNumbers from './pages/PrimeNumbers';
import MultiplicationTable from './pages/MultiplicationTable';
import SumOfNatural from './pages/SumOfNatural';
import SumOfDigits from './pages/SumOfDigits';
import CheckWithin100to500 from './pages/CheckWithin100to500';
import RightTriangle from './pages/RightTriangle';
import Triangle from './pages/Triangle';
import NumberRightTriangle from './pages/NumberRightTriangle';
import GetTheLargest from './pages/GetTheLargest';
import CountTheVowels from './pages/CountTheVowels';
import NumberTriangle from './pages/NumberTriangle';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fibonacci' element={<Fibonacci />} />
        <Route path='/strings' element={<Strings />} />
        <Route path='/prime-numbers' element={<PrimeNumbers />} />
        <Route path='/multiplication-table' element={<MultiplicationTable />} />
        <Route path='/sum-of-natural-numbers' element={<SumOfNatural/>} />
        <Route path='/sum-of-digits-in-a-string' element={<SumOfDigits/>} />
        <Route path='/check-whithin-100-to-500' element={<CheckWithin100to500/>} />
        <Route path='/right-triangle' element={<RightTriangle/>} />
        <Route path='/triangle' element={<Triangle/>} />
        <Route path='/number-right-triangle' element={<NumberRightTriangle/>} />
        <Route path='/get-the-largest-number' element={<GetTheLargest/>} />
        <Route path='/count-the-numbers-of-vowels' element={<CountTheVowels/>} />
        <Route path='/number-triangle' element={<NumberTriangle/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;