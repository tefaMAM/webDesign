import Header from "./header/Header"
import Service from './services/Service';
import About from './about/About';

const App = () => {
  return (
    <div className="flex flex-col gap-[3em]">
        <Header />
        <Service />
        <About />
      </div>
  )
}

export default App


