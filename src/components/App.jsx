import Header from "./header/Header"
import Service from './services/Service';
import About from './about/About';
import Contact from './contact/Contact';
import Testimonials from './testimonials/Testimonials';

const App = () => {
  return (
    <div className="flex flex-col gap-[3em] w-full">
        <Header />
        <Service />
        <About />
        <Contact />
        <Testimonials />
      </div>
  )
}

export default App


