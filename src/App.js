import './App.css';
import Hero from './data/components/Hero';
import Plans from './data/components/Plans/Plans';
import Programs from './data/components/Programs/Programs';
import Reasons from './data/components/Reasons/Reasons';
import Testimonials from './data/components/Testimonials/Testimonials';
import Join from './data/components/Join/Join';
import Footer from './data/components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonials/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
